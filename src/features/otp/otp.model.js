import { Schema, model } from "mongoose";

const otpSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	otp: {
		type: Number,
		required: [true, "OTP is required!"]
	},
	isValidOTP: {
		type: Boolean,
		default: false
	}
});

const OTPModel = model("OTP", otpSchema);

export { OTPModel };
