import ApiError from "./api-error.js";

const globalErrorHandler = async (error, next) => {
	if (error instanceof ApiError) {
		return next(new ApiError(error.statusCode, error.message));
	}
	return next(new ApiError(500, error.message));
};

export { globalErrorHandler };
