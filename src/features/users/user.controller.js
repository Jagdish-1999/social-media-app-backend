import ApiResponse from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/async-handler.js";
import * as userRepository from "./user.repository.js";

const signup = asyncHandler(async (req, res) => {
	const { name, email, password, gender } = req.body || {};
	const avatar = req.image.originalurl;

	const user = await userRepository.signup(name, email, password, gender, avatar);

	return res.status(201).json(new ApiResponse(201, "User registered successfully.", user));
});

const signin = asyncHandler(async (req, res) => {
	const { email, password } = req.body || {};

	const user = await userRepository.signIn(email, password);

	return res.status(200).json(new ApiResponse(200, "User logged in successfully.", user));
});

const logout = asyncHandler(async (req, res) => {
	await userRepository.logout(req.user._id, req.token);

	return res.status(200).json(new ApiResponse(200, "User logged out successfully."));
});

const logoutAllDevices = asyncHandler(async (req, res) => {
	await userRepository.logoutAllDevices(req.user._id);

	return res.status(200).json(new ApiResponse(200, "User logged out from all devices successfully."));
});

const deleteUser = asyncHandler(async (req, res) => {
	const deletedUser = await userRepository.deleteUser(req.user._id, req);

	return res.status(200).json(new ApiResponse(200, "User deleted successfully", deletedUser));
});

const fetchUserDetailsById = asyncHandler(async (req, res) => {
	const user = await userRepository.fetchUserDetailsById(req.user._id);

	return res.status(200).json(new ApiResponse(200, "User fetched successfully.", user));
});

const fetchAllUsersDetail = asyncHandler(async (_req, res) => {
	const users = await userRepository.fetchAllUsersDetail();

	return res.status(200).json(new ApiResponse(200, "User's list fetched successfully.", users));
});

const updateProfile = asyncHandler(async (req, res) => {
	const { name, gender } = req.body || {};
	const url = req.image?.url;

	const user = await userRepository.updateProfile(req.user._id, {
		name,
		gender,
		avatar: url
	});

	res.status(200).json(new ApiResponse(200, "User updated successfully.", user));
});

export {
	signup,
	signin,
	logout,
	logoutAllDevices,
	deleteUser,
	fetchUserDetailsById,
	fetchAllUsersDetail,
	updateProfile
};
