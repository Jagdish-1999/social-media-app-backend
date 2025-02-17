import mongoose from "mongoose";

export const connectToDB = async () => {
	const url = process.env.MONGO_URI || "mongodb://localhost:27017/postaway-2";
	try {
		await mongoose.connect(url);
		console.log("[Success] MongoDB Connected.");
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
