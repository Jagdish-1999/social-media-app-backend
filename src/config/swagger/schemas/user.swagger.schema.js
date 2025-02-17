const UserSchema = {
	type: "object",
	properties: {
		name: {
			type: "string",
			example: "John Doe",
			required: true,
		},
		email: {
			type: "string",
			example: "john.doe@gmail.com",
			required: true,
		},
		avatar: {
			type: "string",
			example: "/public/avatar-1739466953910-418294063.png",
		},
		gender: {
			type: "string",
			enum: ["MALE", "FEMALE", "OTHERS"],
			example: "MALE",
			required: true,
		},
		sessions: {
			type: "array",
			example: [
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\
            		.eyJfaWQiOiI2N2FlMmNjNTAzNTc3MTYxZWRjM2Y4YjQiLCJlbWFpbCI6ImphbmUuZG9lQGdtYWlsLmNvbSIsImlhdCI6MTczOTUzNTE5OCwiZXhwIjoxNzM5NjIxNTk4fQ\
            		.V1oq07mhFQLm_ccdSOnjxkJnFvoW4YQzY8-mr-9NZK8",
			],
		},
		createdAt: {
			type: "string",
			example: "2025-02-14T04:52:09.981Z",
		},
		updatedAt: {
			type: "string",
			example: "2025-02-14T04:52:09.981Z",
		},
	},
};

export default UserSchema;
