const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const cors = require("cors")
const path = require("path")
// const BP = require("body-parser")

const app = express()

// Enabling CORS
app.use(cors())

// Loading environment variables
dotenv.config({ path: "./config/config.env" })

// Bringing in files used for routing
const users = require("./routes/users.js")
const items = require("./routes/items.js")
const comments = require("./routes/comments.js")

// Mounting the routers
app.use("/api/v1/users", users)
app.use("/api/v1/items", items)
app.use("/api/v1", comments)

// Setting up a static folder to display our API documentation
app.use(express.static(path.join(__dirname, "public")))

// Body parser
// app.use(BP.urlencoded({ extended: false }))
// app.use(BP.json())

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"))
}

var server = app.listen(process.env.PORT || 3000, function () {
	console.log("Listening on port " + server.address().port)
})
