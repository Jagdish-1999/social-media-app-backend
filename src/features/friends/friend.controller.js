import ApiResponse from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/async-handler.js";
import * as friendRepository from "./friend.repository.js";

const toggleFriendship = asyncHandler(async (req, res) => {
	const { message, friend, status } = await friendRepository.toggleFriendship(
		req.user._id,
		req.params.friendUserId
	);

	res.status(status).json(new ApiResponse(status, message, friend));
});

const getFriendsList = asyncHandler(async (req, res) => {
	const friends = await friendRepository.getFriendsList(req.user._id);

	res.status(200).json(new ApiResponse(200, "Friend list fetched successfully!", friends));
});

const getPendingRequests = asyncHandler(async (req, res) => {
	const pendingFriends = await friendRepository.getPendingRequests(req.user._id);

	res.status(200).json(new ApiResponse(200, "Pending friend requests fetched successfully.", pendingFriends));
});

const sendResponseToFriendRequest = asyncHandler(async (req, res) => {
	const responseMessage = await friendRepository.sendResponseToFriendRequest(
		req.user._id,
		req.params.friendUserId,
		req.body.status
	);

	res.status(200).json(new ApiResponse(200, responseMessage));
});

export { getFriendsList, toggleFriendship, getPendingRequests, sendResponseToFriendRequest };
