const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentSchema = new schema ({
    id: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    birth: {
        type:String,
        required:true
    },
    place: {
        type:String,
        required:true
    },
    phone: {
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
        type:Date
    }
})

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
