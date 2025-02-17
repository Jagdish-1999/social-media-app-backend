import mongoose from "mongoose";
import ApiError from "../../utils/api-error.js";
import { PostModel } from "../posts/post.model.js";
import { LikeModel } from "./like.model.js";

const toggleLike = async (userId, postId) => {
	const deletedLike = await LikeModel.findOneAndDelete({ userId, postId });

	if (deletedLike)
		return {
			message: "Like deleted successfully.",
			like: null,
			status: 200,
		};

	const newLike = new LikeModel({ userId, postId });
	await newLike.save();

	return {
		message: "Post liked successfully.",
		like: newLike.getLike(),
		status: 201,
	};
};

const fetchLike = async (userId, postId) => {
	postId = mongoose.Types.ObjectId.createFromHexString(postId);

	const like = await LikeModel.find({ postId }).populate("userId", "name email").select("-__v -postId");

	if (!like.length) throw new ApiError(400, "Post doesn't have likes!");

	return like;
};

export { fetchLike, toggleLike };
