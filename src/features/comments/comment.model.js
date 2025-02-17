import { Schema, model } from "mongoose";

const commentSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		postId: {
			type: Schema.Types.ObjectId,
			ref: "Post",
		},
		message: {
			type: String,
			required: [true, "Comment message is required!"],
		},
	},
	{ timestamps: true },
);

commentSchema.methods.getComment = function () {
	return {
		_id: this._id,
		userId: this.userId,
		// postId: this.postId,
		message: this.message,
		createdAt: this.createdAt,
		updatedAt: this.updatedAt,
	};
};

const CommentModel = model("Comment", commentSchema);

export { CommentModel };
