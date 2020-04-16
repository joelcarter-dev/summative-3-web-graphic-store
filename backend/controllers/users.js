const mongoose = require('mongoose')
const User = mongoose.model('User')

// @desc      Get all users
// @route     GET /api/v1/users
exports.getUsers = (req, res, next) => {
	console.log("Get all Users")
	User.find()
		//NOTE May need to change for search, but will do for now
		.sort({ createdAt: 'desc' })
		.then(function(User) {
			return res.json({
				User: User.map(function(item) {
				  return item.toJSON()
				})
			})
		})
}

// @desc      Get single user
// @route     GET /api/v1/users/:id
exports.getUser = (req, res, next) => {
	User.findById(req.params.id)
		.then(function (user) {
			return res.json({ user: user.toJSON() })
		})
		.catch(next)
}

// @desc      Create user
// @route     POST /api/v1/users
exports.createUser = async (req, res, next) => {
	console.log('create user')
	let user = new User(req.body)
	await user.save()
	return res.json({ user: user.toJSON() })
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
