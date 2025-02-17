import ApiResponse from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/async-handler.js";
import * as postRepository from "./post.repository.js";

const createPost = asyncHandler(async (req, res) => {
	const { caption } = req.body;
	const imageUrl = req.image?.url;

	const post = await postRepository.createPost(req.user._id, caption, imageUrl);

	return res.status(201).json(new ApiResponse(201, "Post created successfully.", post));
});

const updatePost = asyncHandler(async (req, res) => {
	const { caption } = req.body;
	const imageUrl = req.image?.url;

	const updatedPost = await postRepository.updatePost(req.user._id, req.params.postId, { caption, imageUrl });

	return res.status(200).json(new ApiResponse(200, "Post updated successfully!", updatedPost));
});

const deletePost = asyncHandler(async (req, res) => {
	await postRepository.deletePost(req.user._id, req.params.postId, req);

	res.status(200).json(new ApiResponse(200, "Post deleted successfully."));
});

const fetchAllPosts = asyncHandler(async (_req, res) => {
	const posts = await postRepository.fetchAllPosts();

	return res.status(200).json(new ApiResponse(200, "Post list fetched successfully.", posts));
});

const fetchPostById = asyncHandler(async (req, res) => {
	const post = await postRepository.fetchPostById(req.params.postId);

	return res.status(200).json(new ApiResponse(200, "Post fetched successfully!", post));
});

const fetchSpecificUserPosts = asyncHandler(async (req, res) => {
	const posts = await postRepository.fetchSpecificUserPosts(req.params.userId);

	return res.status(200).json(new ApiResponse(200, "User's post fetched successfully.", posts));
});

export { createPost, updatePost, deletePost, fetchAllPosts, fetchPostById, fetchSpecificUserPosts };
