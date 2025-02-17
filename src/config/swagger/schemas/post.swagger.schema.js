const PostSchema = {
	type: "object",
	properties: {
		_id: {
			type: "string",
			example: "67ae2cc503577161edc3f8b8",
		},
		userId: {
			type: "string",
			example: "67ae2cc503577161edc3f8b8",
		},
		caption: {
			type: "string",
			example: "Best book ever.",
			required: true,
		},
		imageUrl: {
			type: "string",
			example: "/public/avatar-1739466953910-418294063.png",
		},

		createdAt: {
			type: "string",
			example: "2025-02-14T14:57:02.070Z",
		},

		updatedAt: {
			type: "string",
			example: "2025-02-14T14:57:02.070Z",
		},
	},
};

export default PostSchema;
