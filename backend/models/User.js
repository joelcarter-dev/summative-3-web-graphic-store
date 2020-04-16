const mongoose = require("mongoose")
const Schema = mongoose.Schema
const mongooseUniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        maxLength: [15, 'User name cannot exceed 15 characters']
    },
    bio: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: false,
        unique: true
    },
    qualifications: {
        type: String,
        required: false
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Item' 
    }]
},
{timestamps: true}
)

UserSchema.methods.toJSON = function(){
   return {
       id: this._id,
       firstName: this.firstName,
       lastName: this.lastName,
       bio: this.bio,
       email: this.email,
       phone: this.phone,
       qualifications: this.qualifications,
       items: this.items
   } 
}

// Schema.plugin(mongooseUniqueValidator)

module.exports = mongoose.model("User", UserSchema)

//components
// parent: profile component
// children: item list (put in shared folder)

// create a folder called shared for child components that are going to be used more than once