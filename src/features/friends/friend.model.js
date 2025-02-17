import { Schema, model } from "mongoose";

const friendSchema = new Schema(
	{
		userId: {
			//? The user, who is sending request
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		friendUserId: {
			//? The user, who is getting request
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		status: {
			type: String,
			enum: ["PENDING", "ACCEPTED", "REJECTED"],
		},
	},
	{ timestamps: true },
);

friendSchema.methods.getFriendRequest = function () {
	return {
		// userId: this.userId,
		friendUserId: this.friendUserId,
		status: this.status,
		createdAt: this.createdAt,
		updatedAt: this.updatedAt,
		_id: this._id,
	};
};
const FriendModel = model("Friend", friendSchema);

export { FriendModel };
