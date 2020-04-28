const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: String,
    bio: String,
    photo: String,
    phone: String,
    location: String,
    qualifications: [String],
    memberSince: Number,
    items: [{
        type: Schema.Types.ObjectId, 
        ref: 'Item' 
    }],
    // Comment not required yet
    // comment: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comment'
    // }]
},
{timestamps: true}
)

UserSchema.methods.toJSON = function(){
   return {
        id: this._id,
        name: this.name,
        email: this.email,
        password: this.password,
        bio: this.bio,
        photo: this.photo,
        phone: this.phone,
        location: this.location,
        qualifications: this.qualifications,
        memberSince: this.memberSince,
        items: this.items,
        // comment: this.comment
   } 
}

module.exports = mongoose.model("User", UserSchema)