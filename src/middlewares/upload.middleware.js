import { deleteFilesFromDirectory } from "../utils/delete-file.js";
import ApiError from "../utils/api-error.js";
import { getStoredImageDir, uploads } from "../config/multer.config.js";
import { globalErrorHandler } from "../utils/global-error-handler.js";

//? Only single file upload functionality is available, not handling multiple files upload.
const uploadFiles = filePropName => (req, res, next) => {
	uploads.single(filePropName)(req, res, async error => {
		try {
			await handleAvatarUpload(req, filePropName);
			if (error) {
				return next(new ApiError(400, "Error while uploading file." + error.message));
			}
			next();
		} catch (error) {
			globalErrorHandler(error, next);
		}
	});
};

const handleAvatarUpload = async (req, filePropName) => {
	if (!req.image) {
		req.image = { originalurl: "", url: "" };
	} else {
		//! @TODO: Need to work on this function.
		await deleteFilesFromDirectory(getStoredImageDir(req), {
			excludes: filePropName === "avatar" ? [req.image.originalurl] : "*",
		});
	}
};

export { uploadFiles };
