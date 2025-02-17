import express from "express";
import { verifyUser } from "../../middlewares/auth.middleware.js";
import { uploadFiles } from "../../middlewares/upload.middleware.js";
import * as postController from "./post.controller.js";

const router = express.Router();

//? 1. Handling routes for post operations
router.route("/").post(verifyUser, uploadFiles("imageUrl"), postController.createPost);
router.route("/:postId").put(verifyUser, uploadFiles("imageUrl"), postController.updatePost);
router.route("/:postId").delete(verifyUser, postController.deletePost);
//? Order matters here if swap bottom two routes it gives an error *ObjectId failed for value all*
router.route("/all").get(verifyUser, postController.fetchAllPosts);
router.route("/:postId").get(verifyUser, postController.fetchPostById);
router.route("/user/:userId").get(verifyUser, postController.fetchSpecificUserPosts);

export default router;
