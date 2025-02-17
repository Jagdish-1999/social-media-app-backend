import ApiError from "../../utils/api-error.js";
import { PostModel } from "./post.model.js";
import { deleteFilesFromDirectory } from "../../utils/delete-file.js";
import { getStoredImageDir } from "../../config/multer.config.js";
import mongoose from "mongoose";
import { UserModel } from "../users/user.model.js";

const createPost = async (userId, caption, imageUrl) => {
	const post = new PostModel({ userId, caption, imageUrl });
	await post.save();
	return post.getPost();
};

const updatePost = async (userId, postId, { caption, imageUrl }) => {
	console.log(postId);

	const post = await PostModel.findOne({ _id: postId, userId });

	if (!post) throw new ApiError(400, "Post not found!");

	if (caption) post.caption = caption;
	if (imageUrl) post.imageUrl = imageUrl;

	await post.save();
	return post.getPost();
};

const deletePost = async (userId, postId, req) => {
	const post = await PostModel.findOneAndDelete({ _id: postId, userId });

	if (!post) throw new ApiError(400, "Post not found!");

	await deleteFilesFromDirectory(getStoredImageDir(req), {
		excludes: [post.imageUrl],
	});

	return post;
};

const fetchAllPosts = async () => {
	const posts = await PostModel.find().select("-__v");

	if (!posts && !posts.length) throw new ApiError(200, "Empty post's list.");

	return posts;
};

const fetchPostById = async postId => {
	const post = await PostModel.findById(postId);

	if (!post) throw new ApiError(400, "Post not found!");

	return post.getPost();
};

const fetchSpecificUserPosts = async userId => {
	const user = await UserModel.findById(userId);
	if (!user) throw new ApiError(400, "User not found!");

	const posts = await PostModel.find({ userId }).select("-__v -userId");

	if (!posts.length) throw new ApiError(200, "User don't make any post.");

	return posts;
};

export { createPost, updatePost, deletePost, fetchAllPosts, fetchPostById, fetchSpecificUserPosts };
