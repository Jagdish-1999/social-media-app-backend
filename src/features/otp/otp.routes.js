import express from "express";
import * as otpController from "./otp.controller.js";

const router = express.Router(otpController.sendOtp);

router.route("/send").post(otpController.sendOtp);
router.route("/verify").post(otpController.verifyOtp);
router.route("/reset-password").post(otpController.resetPassword);

export default router;
