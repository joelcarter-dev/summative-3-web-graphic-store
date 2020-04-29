const express = require("express")
const router = express.Router()
const {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
	updateUserRating,
	addComment
} = require("../controllers/users")

router.route("/").get(getUsers).post(createUser)
router.route("/:userId/items/:itemId/comments").post(addComment)
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser)
router.route("/:id/rating").put(updateUserRating)

module.exports = router
