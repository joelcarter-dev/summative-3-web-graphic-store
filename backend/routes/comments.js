const express = require("express")
const router = express.Router()
const {
	getComments,
	updateComment,
	deleteComment,
} = require("../controllers/comments")

router.route("/items/:itemId/comments").get(getComments)
router.route("/comments/:id").put(updateComment).delete(deleteComment)

module.exports = router