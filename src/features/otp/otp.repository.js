import { sendOTPOnMail, generateOTP } from "../../config/nodemailer.config.js";
import ApiError from "../../utils/api-error.js";
import { hashPassword } from "../users/user.common.js";
import { UserModel } from "../users/user.model.js";
import { OTPModel } from "./otp.model.js";

const sendOtp = async (userId, email) => {
	await OTPModel.deleteMany({ userId }); //? Deleting previous OTP

	const generatedNewOTP = generateOTP();
	const newOTP = new OTPModel({ userId, otp: generatedNewOTP });
	await newOTP.save();

	const mailOptions = {
		from: `${process.env.SMTP_USER_NAME} <${process.env.SMTP_USER_EMAIL}>`,
		to: email,
		subject: "Your Password Reset OTP Code.",
		html: `<pre>Your One Time Passcode Code(OTP) is: <b>${generatedNewOTP}</b></pre>`,
	};

	await sendOTPOnMail(mailOptions);

	return "OTP send successfully, Please check your Mail.";
};

const verifyOtp = async (userId, otp) => {
	const existedOTP = await OTPModel.findOne({ userId, otp: Number(otp) });

	if (!existedOTP) {
		return "Invalid OTP, verification failed!";
	}

	existedOTP.isValidOTP = true;
	await existedOTP.save();

	return "OTP verification successful.";
};

const resetPassword = async (userId, newPassword) => {
	const validateOtp = await OTPModel.findOneAndDelete({ userId });

	if (!validateOtp || !validateOtp.isValidOTP) return "Please verify OTP first, Before Reset your Password.";

	const hashedPassword = await hashPassword(newPassword);

	const updatedUser = await UserModel.findByIdAndUpdate({ _id: userId }, { password: hashedPassword });

	if (!updatedUser) throw new ApiError(400, "User not found!");

	return "Password Changed successfully.";
};

export { sendOtp, verifyOtp, resetPassword };
