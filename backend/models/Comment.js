const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema(
	{
		content: String,
		// Comment can be made by minimum 1 & maximum 1 User
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true
		},
		// Comment can belong to minimum 1 & maximum 1 Item
		item: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Item",
			required: true
		}
	}
)

CommentSchema.methods.toJSON = function () {
	return {
		id: this._id,
		content: this.content,
		user: this.user,
		item: this.item
	}
}

module.exports = mongoose.model("Comment", CommentSchema)