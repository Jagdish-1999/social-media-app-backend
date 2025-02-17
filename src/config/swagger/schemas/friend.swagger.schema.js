const FriendSchema = {
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
		friendUserId: {
			type: "string",
			example: "67ae2cc503577161edc3f8b8",
			required: true,
		},
		status: {
			type: "list",
			example: "PENDING",
			enum: ["PENDING", "ACCEPTED", "REJECTED"],
		},
	},
};

export default FriendSchema;
