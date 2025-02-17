import ApiResponse from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/async-handler.js";
import * as likeRepository from "./like.repository.js";

const toggleLike = asyncHandler(async (req, res) => {
	const { like, message, status } = await likeRepository.toggleLike(req.user._id, req.params.postId);

	res.status(status).json(new ApiResponse(status, message, like));
});

const fetchLike = asyncHandler(async (req, res) => {
	const likes = await likeRepository.fetchLike(req.user._id, req.params.postId);

	res.status(200).json(new ApiResponse(200, "Post's Like fetched successfully", likes));
});

export { fetchLike, toggleLike };
