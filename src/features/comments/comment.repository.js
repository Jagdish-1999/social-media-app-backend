import ApiError from "../../utils/api-error.js";
import { CommentModel } from "./comment.model.js";

const addComment = async (userId, postId, message) => {
	const comment = await CommentModel({ userId, postId, message });
	const savedComment = await comment.save();
	return savedComment.getComment();
};

const fetchSpecificPostComment = async postId => {
	const comments = await CommentModel.find({ postId }).select("-__v -postId");

	if (!comments.length) {
		throw new ApiError(400, "Comment does not exist on this post!");
	}

	return comments;
};

const deleteComment = async (userId, commentId) => {
	const existedComment = await CommentModel.findById(commentId).populate("postId");

	if (!existedComment) throw new ApiError(400, "Comment not found!");

	const isCommentOwner = existedComment.userId.toString() === userId.toString();

	//? Checking if user has permission to delete comment -> (comment owner or post owner)
	if (!(existedComment.userId.toString() === userId.toString() || existedComment.postId.userId.toString() === userId.toString()))
		throw new ApiError(400, "User don't have permission to delete this comment!");

	const deletedComment = await CommentModel.findByIdAndDelete(commentId);

	if (!deletedComment) throw new ApiError(400, "Comment not found!");

	return isCommentOwner ? "Comment deleted successfully by comment owner." : "Comment deleted successfully by post owner.";
};

const updateComment = async (userId, commentId, message) => {
	const existedComment = await CommentModel.findById(commentId).populate("postId");

	if (!existedComment) {
		throw new ApiError(400, "Comment not found!");
	}

	const isCommentOwner = existedComment.userId.toString() === userId.toString();

	if (!(existedComment.userId.toString() === userId.toString() || existedComment.postId.userId.toString() === userId.toString()))
		throw new ApiError(400, "User don't have permission to update this comment!");

	const updatedComment = await CommentModel.findByIdAndUpdate({ _id: commentId }, { message });

	if (!updatedComment) throw new ApiError(400, "Comment not found!");

	return {
		updatedComment,
		updateMessage: isCommentOwner ? "Comment updated successfully by comment owner." : "Comment updated successfully by post owner.",
	};
};

export { addComment, fetchSpecificPostComment, updateComment, deleteComment };
