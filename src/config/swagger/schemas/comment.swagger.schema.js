const CommentSchema = {
	type: "object",
	properties: {
		_id: {
			type: "string",
			example: "67ae2cc503577161edc3f8b4",
		},
		userId: {
			type: "string",
			example: "67ae2cc503577161edc3f8b4",
		},
		postId: {
			type: "string",
			example: "67ae2cc503577161edc3f8b8",
		},
		message: {
			type: "string",
			example: "This is one of the best post.",
		},
		createdAt: {
			type: "string",
			example: "2025-02-14T15:52:46.259Z",
		},
		updatedAt: {
			type: "string",
			example: "2025-02-14T15:52:46.259Z",
		},
	},
};

export default CommentSchema;
