const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema ({
    name: {
        type:String,
        required:true
    },
    fullname: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    createdAt: {
        type:Date,
        default:Date.now()
    },
    updatedAt: {
        type:Date,
        default:Date.now()
    },
    deletedAt: {
        Type:Date
    }
})

module.exports = User => mongoose.model("user", userSchema);
