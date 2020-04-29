const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./config/database")

const app = express()

// Enabling CORS
app.use(cors())

// Loading environment variables
dotenv.config({ path: "./config/config.env" })

// Connecting to the database
connectDB()

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Bringing in models
require('./models/Item')
require('./models/User')
require('./models/Comment')

// Bringing in files used for routing
const users = require("./routes/users.js")
const items = require("./routes/items.js")
const comments = require("./routes/comments.js")

// Mounting the routers
app.use("/api/v1/users", users)
app.use("/api/v1/items", items)
app.use("/api/v1", comments)

// Starting the server
const PORT = process.env.PORT || 3000
const server = app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

