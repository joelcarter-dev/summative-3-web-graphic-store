/*******************************************************************************
 * The seeder will be fully functional after you make schemas for comments & users
 * 
 * In the Terminal
 * Make sure you are in the same directory as the "seeder.js" file
 * To seed all three collections type
 * 		node seeder run
 * To delete all three collections from the database
 * 		node seeder destroy
 * To seed the comments collection
 * 		node seeder import comments
 * To delete the comments collection
 * 		node seeder delete comments
 * To seed the items collection
 * 		node seeder import items
 * To delete the items collection
 * 		node seeder delete items
 * To seed the users collection
 * 		node seeder import users
 * To delete the users collection
 * 		node seeder delete users
 ******************************************************************************/

const fs = require("fs")
const mongoose = require("mongoose")
const colors = require("colors")
const dotenv = require("dotenv")

// Loading environment variables
dotenv.config()

// Loading models
// const Comment = require("./models/Comment")
const Item = require("./models/Item")
// const User = require('./models/User');

// Connecting to the database
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
})

// Reading JSON files
// const comments = JSON.parse(
// 	fs.readFileSync(`${__dirname}/_data/comments.json`, "utf-8")
// )
const items = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/items.json`, 'utf-8')
);
// const users = JSON.parse(
// 	fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
// );

// Importing into database
const importData = async () => {
	try {
		await Comment.create(comments)
		await Item.create(items);
		await User.create(users);
		console.log("✨ ARTmarket database seeded ✨ ".green.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}
const importComments = async () => {
	try {
		await Comment.create(comments)
		console.log("Comments collection imported into database".green.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}
const importItems = async () => {
	try {
		await Item.create(items);
		console.log("Items collection imported into database".green.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}
const importUsers = async () => {
	try {
		await User.create(users);
		console.log("Users collection imported into database".green.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}

// Deleting from database
const deleteData = async () => {
	try {
		await Comment.deleteMany()
		await Item.deleteMany();
		await User.deleteMany();
		console.log("All data deleted from database...".red.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}
const deleteComments = async () => {
	try {
		await Comment.deleteMany()
		console.log("Comments collection deleted from database...".red.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}
const deleteItems = async () => {
	try {
		await Item.deleteMany();
		console.log("Items collection deleted from database...".red.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}
const deleteUsers = async () => {
	try {
		await User.deleteMany();
		console.log("Users collection deleted from database...".red.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}

// Setting up commandline options
if (process.argv[2] === "run") {
	importData()
} else if (process.argv[2] === "destroy") {
	deleteData()
} else if (process.argv[2] === "import" && process.argv[3] === "comments") {
	importComments()
} else if (process.argv[2] === "delete" && process.argv[3] === "comments") {
	deleteComments()
} else if (process.argv[2] === "import" && process.argv[3] === "items") {
	importItems()
} else if (process.argv[2] === "delete" && process.argv[3] === "items") {
	deleteItems()
} else if (process.argv[2] === "import" && process.argv[3] === "users") {
	importUsers()
} else if (process.argv[2] === "delete" && process.argv[3] === "users") {
	deleteUsers()
}