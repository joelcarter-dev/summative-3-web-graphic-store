// @desc      Get all users
// @route     GET /api/v1/users
exports.getUsers = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Showing all users` })
}

// @desc      Get single user
// @route     GET /api/v1/users/:id
exports.getUser = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Showing details of user with id ${req.params.id}`,
	})
}

// @desc      Create user
// @route     POST /api/v1/users
exports.createUser = (req, res, next) => {
	res.status(200).json({ success: true, msg: `New user created` })
}

// @desc      Update user
// @route     PUT /api/v1/users/:id
exports.updateUser = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `User info has been updated for user with id ${req.params.id}`,
	})
}

// @desc      Update user rating
// @route     PUT /api/v1/users/:id/rating
exports.updateUserRating = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `The rating for Artist with id ${req.params.id} has been updated`,
	})
}

// @desc      Delete user
// @route     DELETE /api/v1/users/:id
exports.deleteUser = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `User with id ${req.params.id} deleted` })
}
