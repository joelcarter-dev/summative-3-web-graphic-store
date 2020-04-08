const express = require('express')
const cors = require('cors')
const BP = require('body-parser')

const app = express()

//modals
// require('./modals/Article')

//routs 
app.use(BP.urlencoded({extended: false}))
app.use(BP.json())
app.use(cors())
app.use(require('./routs'))

const server = app.listen(process.env.PORT || 3000, function() {
    console.log("Server Running at " + server.address().port)

})