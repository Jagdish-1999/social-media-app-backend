import ApiResponse from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/async-handler.js";
import * as otpRepository from "./otp.repository.js";

const sendOtp = asyncHandler(async (req, res) => {
	const otpMessage = await otpRepository.sendOtp(req.user._id, req.body.email);

	res.status(201).json(new ApiResponse(201, otpMessage));
});

const verifyOtp = asyncHandler(async (req, res) => {
	const otpMessage = await otpRepository.verifyOtp(req.user._id, req.body.otp);

	res.status(200).json(new ApiResponse(200, otpMessage));
});

const resetPassword = asyncHandler(async (req, res) => {
	const resetPassMessage = await otpRepository.resetPassword(req.user._id, req.body.newPassword);

	res.status(200).json(new ApiResponse(200, resetPassMessage));
});

export { sendOtp, verifyOtp, resetPassword };
