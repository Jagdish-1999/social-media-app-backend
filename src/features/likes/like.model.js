import { Schema, model } from "mongoose";

const likeSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	postId: {
		type: Schema.Types.ObjectId,
		ref: "Post",
	},
});

likeSchema.methods.getLike = function () {
	return {
		userId: this.userId,
		postId: this.postId,
		_id: this._id,
	};
};

const LikeModel = model("Like", likeSchema);

export { LikeModel };
