import multer from "multer";

const getStoredImageDir = (req) => {
	const url = req.originalUrl;
	if (url.includes("/api/users")) return "./public/images/avatar";
	else if (url.includes("/api/posts")) return "./public/images/posts";
	else return "./public/images";
};

const storage = multer.diskStorage({
	destination: (req, _file, cb) => {
		cb(null, getStoredImageDir(req));
	},
	filename: (req, file, cb) => {
		const fname = `${file.fieldname}-${Date.now()}-${Math.round(
			Math.random() * 1e9
		)}.${file.mimetype.split("/")?.[1]}`;

		req.image = {
			originalurl: fname,
			url: `${getStoredImageDir(req).split(".")?.[1]}/${fname}`
		};

		cb(null, fname);
	}
});

const uploads = multer({ storage });

export { uploads, getStoredImageDir };
