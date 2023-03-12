const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name: String,
    age: Number,
    email: String
  })


const Student = mongoose.model('Student', studentSchema);

module.exports = Student
// module.exports = mongoose.model('student', studentSchema);
//mongoose.model('Student', studentSchema, 'students');
