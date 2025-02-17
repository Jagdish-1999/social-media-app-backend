import { Schema, model } from "mongoose";

const postSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User"
		},
		caption: {
			type: String,
			required: [true, "Caption is required!"]
		},
		imageUrl: String
	},
	{ timestamps: true }
);

postSchema.methods.getPost = function () {
	return {
		_id: this._id,
		userId: this.userId,
		caption: this.caption,
		imageUrl: this.imageUrl,
		comments: this.comments,
		createdAt: this.createdAt,
		updatedAt: this.updatedAt
	};
};

const PostModel = model("Post", postSchema);

export { PostModel };
