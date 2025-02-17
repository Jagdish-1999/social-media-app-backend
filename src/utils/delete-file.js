import fs from "fs/promises";
import path from "path";
import ApiError from "./api-error.js";

//! @TODO: Need work on this.
const deleteFilesFromDirectory = async (dirName, { excludes = "*" || [] } = {}) => {
	if (excludes === "*") return;

	const files = await fs.readdir(dirName);

	if (files.length === 0) return;

	const notToDeleteSet = new Set(excludes);
	const filesToDelete = files.filter(fname => !notToDeleteSet.has(fname));

	const deleteFilePromises = filesToDelete.filter(fname => {
		const fpath = path.join(dirName, fname);
		return fs.unlink(fpath, err => {
			if (err) {
				throw new ApiError(400, `Error while deleting file from - ${fpath}`);
			}
			console.log(`File deleted successfully ${fname}`);
		});
	});

	await Promise.all(deleteFilePromises);
};

export { deleteFilesFromDirectory };
