import jwt from "jsonwebtoken";
import ApiError from "../utils/api-error.js";
import { UserModel } from "../features/users/user.model.js";
import { globalErrorHandler } from "../utils/global-error-handler.js";

const verifyUser = async (req, _res, next) => {
	const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
	try {
		if (!token) {
			throw new ApiError(401, "Authorization token not available!");
		}
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) throw new ApiError(401, "Invalid token");

		const user = await UserModel.findById(decoded._id).select("-password -__v");

		if (!user) {
			throw new ApiError(400, "User does not exist");
		}

		const validSession = user.sessions.includes(token);
		if (!validSession) {
			throw new ApiError(401, "Invalid session");
		}

		//? Adding token and user info to the request object.
		req.token = token;
		req.user = user;
		next();
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			await removeExpiredSession(token, next);
		}
		globalErrorHandler(error, next);
	}
};

const removeExpiredSession = async (token, next) => {
	try {
		await UserModel.updateOne({ sessions: token }, { $pull: { sessions: token } });
		throw new ApiError(400, "Session has been expired!");
	} catch (error) {
		globalErrorHandler(error, next);
	}
};

export { verifyUser };
