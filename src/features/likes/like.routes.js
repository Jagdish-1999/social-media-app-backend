import express from "express";
import * as likeController from "./like.controller.js";

const router = express.Router();

router.route("/toggle/:postId").post(likeController.toggleLike);
router.route("/:postId").get(likeController.fetchLike);

export default router;
