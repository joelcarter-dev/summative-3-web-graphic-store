const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        maxLength: [15, 'User name cannot exceed 15 characters']
    },
    // PROFILE PICTURE
    imageURL: {
        type: String,
        required: false
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
        name: this.firstName,
        userName: this.userName,
        bio: this.bio,
        email: this.email,
        phone: this.phone,
        qualifications: this.qualifications,
        items: this.items
   } 
}

module.exports = mongoose.model("User", UserSchema)

//components
// parent: profile component
// children: item list (put in shared folder)

// create a folder called shared for child components that are going to be used more than once