const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema(
	{
		content: String,
    user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true
		},
		item: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Item"
		}],
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
