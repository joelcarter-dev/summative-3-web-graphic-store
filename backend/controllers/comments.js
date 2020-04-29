// @desc      Get all comments made about an item
// @route     GET /api/v1/items/:itemId/comments
exports.getComments = (req, res, next) => {
	res
		.status(200)
		.json({
			success: true,
			msg: `Here are all comments about the item with id ${req.params.itemId}`,
		})
}

// @desc      Update comment
// @route     PUT /api/v1/comments/:id
exports.updateComment = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `The comment with id ${req.params.id} has been updated`,
	})
}

// @desc      Delete comment
// @route     DELETE /api/v1/comments/:id
exports.deleteComment = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `The comment with id ${req.params.id} has been deleted`,
	})
}
