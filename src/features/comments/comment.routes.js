import express from "express";
import * as commentController from "./comment.controller.js";

const router = express.Router();

//? 1. Handling routes for comment operations
router.route("/:postId").post(commentController.addComment);
router.route("/:commentId").delete(commentController.deleteComment);
router.route("/:postId").get(commentController.fetchSpecificPostComment);
router.route("/:commentId").put(commentController.updateComment);

export default router;
