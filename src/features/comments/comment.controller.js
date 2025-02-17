import ApiResponse from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/async-handler.js";
import * as commentRepository from "./comment.repository.js";

const addComment = asyncHandler(async (req, res) => {
	const comment = await commentRepository.addComment(req.user._id, req.params.postId, req.body.message);

	return res.status(201).json(new ApiResponse(201, "User make a comment on the post.", comment));
});

const fetchSpecificPostComment = asyncHandler(async (req, res) => {
	const comments = await commentRepository.fetchSpecificPostComment(req.params.postId);

	res.status(200).json(new ApiResponse(200, "Comment fetched successfully", comments));
});

const deleteComment = asyncHandler(async (req, res) => {
	const deleteMessage = await commentRepository.deleteComment(req.user._id, req.params.commentId);

	return res.status(200).json(new ApiResponse(200, deleteMessage));
});

const updateComment = asyncHandler(async (req, res) => {
	const commentObj = await commentRepository.updateComment(req.user._id, req.params.commentId, req.body.message);

	res.status(200).json(new ApiResponse(200, commentObj.updateMessage, commentObj.comment));
});

export { addComment, fetchSpecificPostComment, updateComment, deleteComment };
