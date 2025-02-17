import swaggerJSDoc from "swagger-jsdoc";
import * as schemas from "./schemas/exports.js";

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Postaway-2",
			version: "1.0.0",
			description: "API Documentation using Swagger UI for Social media app.",
		},
		servers: [
			{
				url: `http://localhost:${process.env.PORT}`,
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
					description: "Enter your JWT token",
				},
			},
			schemas: {
				User: schemas.UserSchema,
				Post: schemas.PostSchema,
				Comment: schemas.CommentSchema,
				OTP: schemas.OTPSchema,
				Like: schemas.LikeSchema,
				Friend: schemas.FriendSchema,
			},
		},
		security: [{ bearerAuth: [] }],
	},
	apis: ["./src/features/**/*.yml"],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
