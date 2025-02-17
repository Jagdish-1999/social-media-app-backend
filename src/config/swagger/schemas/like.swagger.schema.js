const LikeSchema = {
	type: "object",
	properties: {
		_id: {
			type: "string",
			example: "67ae2cc503577161edc3f8b4",
			required: true,
		},
		userId: {
			type: "string",
			example: "67ae2cc503577161edc3f8b4",
			required: true,
		},
		postId: {
			type: "string",
			example: "67ae2cc503577161edc3f8b8",
			required: true,
		},
	},
};

export default LikeSchema;
