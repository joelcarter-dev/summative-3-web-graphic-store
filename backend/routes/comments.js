const express = require("express")
const router = express.Router()
const {
	getComments,
	addComment,
	updateComment,
	deleteComment,
} = require("../controllers/comments")

router.route("/items/:itemId/comments").get(getComments).post(addComment)
router.route("/comments/:id").put(updateComment).delete(deleteComment)

module.exports = router