import ApiError from "../../utils/api-error.js";
import { UserModel } from "./user.model.js";
import { hashPassword } from "./user.common.js";
import { deleteFilesFromDirectory } from "../../utils/delete-file.js";
import { getStoredImageDir } from "../../config/multer.config.js";

const signup = async (name, email, password, gender, avatar) => {
	if ([name, email, password, gender].some(isEmpty => isEmpty?.trim() === "")) {
		throw new ApiError(500, "name, email, password & gender is required!");
	}

	if (await UserModel.findOne({ email })) throw new ApiError(400, "User already exist!");

	const hashedPassword = await hashPassword(password);

	const newUser = new UserModel({
		name,
		email,
		gender,
		avatar,
		password: hashedPassword,
	});

	await newUser.save();

	return newUser.getUserDetails();
};

const signIn = async (email, password) => {
	if ([email, password].some(isEmpty => isEmpty?.trim() === "")) throw new ApiError(500, "email & password is required!");

	const user = await UserModel.findOne({ email });
	if (!user) throw new ApiError(400, "User not found!");

	const isPasswordMatched = await user.matchPassword(password);
	if (!isPasswordMatched) throw new ApiError(400, "Incorrect password!");

	const token = user.createToken();
	user.sessions.push(token);
	await user.save();

	return user.getUserDetails();
};

const logout = async (userId, token) => {
	const user = await UserModel.findById(userId);

	const index = user.sessions.indexOf(token);
	if (index === -1) throw new ApiError(400, "Invalid token, session not found!");

	user.sessions.splice(index, 1);

	return await user.save();
};

const logoutAllDevices = async userId => {
	const user = await UserModel.findById(userId);
	user.sessions = [];
	return await user.save();
};

const deleteUser = async (userId, req) => {
	const user = await UserModel.findByIdAndDelete(userId);

	//? Handling the case if two processes are trying to delete same user
	if (!user) throw new ApiError(400, "User not found!");

	//? Deleting user's avatar image from -> /public/images/avatar
	await deleteFilesFromDirectory(getStoredImageDir(req));

	return user.getUserDetails();
};

const fetchUserDetailsById = async userId => {
	const user = await UserModel.findById(userId).select("-password -__v -sessions");

	return user;
};

const fetchAllUsersDetail = async () => {
	const users = await UserModel.find().select("-password -__v -sessions");

	if (!users && !users.length) throw new ApiError(200, "User's list is empty.");

	return users;
};

const updateProfile = async (userId, { name, gender, avatar }) => {
	if (!name && !gender && !avatar) throw new ApiError(400, "Invalid values to update!");

	const user = await UserModel.findById(userId).select("-password -__v -sessions -createdAt");

	if (!user) throw new ApiError(400, "User not found!");

	if (name) user.name = name;
	if (gender) user.gender = gender;
	if (avatar) user.avatar = avatar;

	return await user.save();
};

export { signup, signIn, logout, logoutAllDevices, fetchUserDetailsById, fetchAllUsersDetail, updateProfile, deleteUser };
