const express = require("express")
const router = express.Router()
const {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
	updateUserRating,
} = require("../controllers/users")

router.route("/").get(getUsers).post(createUser)
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser)
router.route("/:id/rating").put(updateUserRating)

module.exports = router
