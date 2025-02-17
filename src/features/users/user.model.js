import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Schema, model } from "mongoose";
import ApiError from "../../utils/api-error.js";

const userSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			lowercase: true,
			required: true
		},
		email: {
			type: String,
			trim: true,
			unique: true,
			lowercase: true,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		gender: {
			type: String,
			required: true,
			uppercase: true,
			trim: true,
			enum: ["MALE", "FEMALE", "OTHERS"]
		},
		avatar: {
			type: String,
			default: ""
		},
		sessions: [String]
	},
	{ timestamps: true }
);

userSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

userSchema.methods.createToken = function (next) {
	const token = jwt.sign(
		{
			_id: this._id,
			email: this.email
		},
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRY }
	);
	if (!token) return next(new ApiError(500, "Failed to create token"));
	return token;
};

userSchema.methods.getUserDetails = function () {
	return {
		_id: this._id,
		name: this.name,
		email: this.email,
		avatar: this.avatar,
		gender: this.gender,
		sessions: this.sessions,
		createdAt: this.createdAt,
		updatedAt: this.updatedAt
	};
};

const UserModel = model("User", userSchema);

export { UserModel };
