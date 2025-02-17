import express from "express";
import * as friendController from "./friend.controller.js";

const router = express.Router();

router.route("/toggle-friendship/:friendUserId").post(friendController.toggleFriendship);
//? Not passing userId as parameter getting it from Authorization token -> only logged in user can get friend list
router.route("/get-friends").get(friendController.getFriendsList);
router.route("/get-pending-requests").get(friendController.getPendingRequests);
router.route("/response-to-request/:friendUserId").post(friendController.sendResponseToFriendRequest);

export default router;
