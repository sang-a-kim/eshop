import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({});

userSchema.virtual("id").get(function () {
	return this._id.toHexString();
});
userSchema.set("toJson", { virtuals: true });

const User = mongoose.model("User", userSchema);

export default User;
