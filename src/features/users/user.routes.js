import { Router } from "express";
import { verifyUser } from "../../middlewares/auth.middleware.js";
import { uploadFiles } from "../../middlewares/upload.middleware.js";
import * as userController from "./user.controller.js";

const router = Router();

//? 1. Handling routes for user operations.
//? @swagger documentation.

router.route("/signup").post(uploadFiles("avatar"), userController.signup);
router.route("/signin").post(userController.signin);
router.route("/logout").post(verifyUser, userController.logout);
router.route("/logout-all-devices").post(verifyUser, userController.logoutAllDevices);
//? Not passing userId as parameter getting it from Authorization token -> only logged in user can delete their accounts
router.route("/").delete(verifyUser, userController.deleteUser);
//? Not passing userId as parameter getting it from Authorization token -> only logged in user can get their details
router.route("/get-details").get(verifyUser, userController.fetchUserDetailsById);
router.route("/get-all-details").get(verifyUser, userController.fetchAllUsersDetail);
//? Not passing userId as parameter getting it from Authorization token -> only logged in user can update their profile
router.route("/update-details").put(verifyUser, uploadFiles("avatar"), userController.updateProfile);

export default router;
