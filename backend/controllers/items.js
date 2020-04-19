// @desc      Get all items
// @route     GET /api/v1/items
const mongoose = require('mongoose')

const Item = mongoose.model('Item')

exports.getItems = (req, res, next) => {
	console.log("Get all Items")
	Item.find()
		//NOTE May need to change for search, but will do for now
		.sort({ createdAt: 'desc' })
		.then(function (items) {
			return res.json({
				items: items.map(function (item) {
					return item.toJSON();
				})
			})
		})
}

// @desc      Get single item
// @route     GET /api/v1/items/:id
exports.getItem = (req, res, next) => {
	Item.findById(req.params.id)
		.then(function (item) {
			return res.json({ item: item.toJSON() })
		})
		.catch(next)
}

// @desc      Get items buy an array of ids
// @route     GET /api/v1/items/:id
exports.getItem = (req, res, next) => {
	Item.findById(req.params.id)
		.then(function (item) {
			return res.json({ item: item.toJSON() })
		})

	Item.find().where('_id').in(req.params.id).exec((err, records) => {})
}

// @desc      Create item
// @route     POST /api/v1/items
exports.createItem = async (req, res, next) => {
	console.log('create item')
  	let item = new Item(req.body)
  	await item.save()
  	return res.json({ item: item.toJSON() })
}

// @desc      Update item
// @route     PUT /api/v1/items/:id
exports.updateItem = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Information in the database has been updated for item with id ${req.params.id}`,
	})
}

// @desc      Delete item
// @route     DELETE /api/v1/items/:id
exports.deleteItem = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Item with id ${req.params.id} deleted` })
}

// @desc      Get items listed at more than the price sent by the user
// @route     GET /api/v1/items/minprice/:price
exports.getItemsMoreExpensiveThan = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `You are seeing a list of items that cost more than $${req.params.price}`,
	})
}

// @desc      Get items listed at less than the price sent by the user
// @route     GET /api/v1/items/maxprice/:price
exports.getItemsLessExpensiveThan = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `You are seeing a list of items that cost less than $${req.params.price}`,
	})
}
