import mongoose from "mongoose";
import ApiError from "../../utils/api-error.js";
import { FriendModel } from "./friend.model.js";
import { UserModel } from "../users/user.model.js";

const toggleFriendship = async (userId, friendUserId) => {
	const castedFriendUserId = mongoose.Types.ObjectId.createFromHexString(friendUserId);

	const friendUser = await UserModel.findById(castedFriendUserId);
	if (!friendUser) throw new ApiError(400, "Friend not found!");

	const existingFriendship = await FriendModel.findOne({
		userId,
		friendUserId,
	});

	if (!existingFriendship) {
		const newFriendRequest = new FriendModel({
			userId,
			friendUserId,
			status: "PENDING",
		});
		await newFriendRequest.save();

		return {
			message: "Friend request send successfully.",
			friend: newFriendRequest.getFriendRequest(),
			status: 201,
		};
	}

	const deletedFriendship = await FriendModel.findOneAndDelete({
		userId,
		friendUserId,
	});

	if (!deletedFriendship) throw new ApiError(400, "Friend Request not found!");

	return {
		message: "User removed from friend list successfully.",
		friend: null,
		status: 200,
	};
};

const getFriendsList = async userId => {
	const pipeline = [
		{ $match: { userId } },
		{
			$lookup: {
				from: "users",
				localField: "userId",
				foreignField: "_id",
				as: "user",
			},
		},
		{ $unwind: "$user" },
		{
			$match: {
				status: "ACCEPTED",
			},
		},
		{
			$project: {
				"user.password": 0,
				"user.gender": 0,
				"user.sessions": 0,
				"user.avatar": 0,
				"user.createdAt": 0,
				"user.updatedAt": 0,
				"user.__v": 0,
			},
		},
		{
			$replaceRoot: {
				newRoot: "$user",
			},
		},
	];

	// return await FriendModel.aggregate(pipeline);
	return await FriendModel.find({ $and: [{ status: "ACCEPTED" }, { $or: [{ userId }, { friendUserId: userId }] }] });
};

const getPendingRequests = async userId => {
	const pendingFriendship = await FriendModel.find({
		$and: [{ status: "PENDING" }, { $or: [{ userId }, { friendUserId: userId }] }],
	}).select("-password -sessions -__v -avatar -createdAt -updatedAt");

	return pendingFriendship;
};

const sendResponseToFriendRequest = async (userId, friendUserId, status) => {
	friendUserId = mongoose.Types.ObjectId.createFromHexString(friendUserId);
	status = status.toUpperCase();

	if (!["ACCEPTED", "REJECTED"].includes(status)) throw new ApiError(400, `Invalid status '${status}'. It should be either ACCEPTED or REJECTED!`);

	const existingFriendship = await FriendModel.findOneAndUpdate({ userId: friendUserId, friendUserId: userId }, { status });

	if (!existingFriendship) throw new ApiError(400, "Friend request not found!");

	return status === "ACCEPTED" ? "You Accept this friend request." : "You Reject this friend request.";
};

export { getFriendsList, toggleFriendship, getPendingRequests, sendResponseToFriendRequest };
