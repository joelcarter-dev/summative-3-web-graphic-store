const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
			unique: true,
			maxlength: [60, 'Name can not be more than 60 characters']
		},
		price: {
			type: Number,
			required: [true, 'Please add a price']
		},
		about: {
			type: String,
			required: [true, 'Please add a description for your artwork'],
			unique: true,
			maxlength: [300, 'Art description cannot be more than 300 characters']
		},
		image: {
			type: String,
			match: [
				/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
				'Please use a valid URL with HTTP or HTTPS'
			],
			default: 'no-photo.jpg'
		},
		sold: {
			type: Boolean,
			default: false
		},
		// Item can have minimum 1 & maximum 1 User
		artist: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true
		},
		// Item can have minimum 0 & maximum many Comment
		items: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}],
	}
)

ItemSchema.methods.toJSON = function () {
	return {
		id: this._id,
		name: this.name,
		price: this.price,
		about: this.about,
		image: this.image,
		sold: this.sold
	}
}

module.exports = mongoose.model("Item", ItemSchema)
