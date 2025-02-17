//? 1.Importing all required modules
import cors from "cors";
import express from "express";
import ApiResponse from "./utils/api-response.js";
import ApiError from "./utils/api-error.js";
import { verifyUser } from "./middlewares/auth.middleware.js";
import * as routes from "./features/exports.js";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger/swagger.config.js";

//? 2.Initializing express app
const app = express();

const corsOptions = {
	origin: "localhost",
	credentials: true,
	methods: ["GET", "POST", "PUT", "DELETE"],
};

//? 3.Configuring middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors(corsOptions));

//? 4.Handling routes
app.use("/api/users", routes.userRoutes);
app.use("/api/posts", routes.postRoutes);
app.use("/api/comments", verifyUser, routes.commentRoutes);
app.use("/api/likes", verifyUser, routes.likeRoutes);
app.use("/api/friends", verifyUser, routes.friendRoutes);
app.use("/api/otp", verifyUser, routes.otpRoutes);

//? 6.Handling errors
app.use((error, _req, res, _next) => {
	console.log("[Error] Catch: ", error);
	if (error instanceof ApiError) return res.status(error.statusCode).json(new ApiResponse(error.statusCode, error.message));

	return res.status(500).json(new ApiResponse(500, error.message));
});

//? 5.Handling unknown routes
app.use("*", (_req, res) => {
	res.status(404).json(new ApiResponse(404, "This route doesn't exist!"));
});

export default app;
