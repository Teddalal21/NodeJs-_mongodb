const mongoose = require('mongoose')


const connecDB = () => {
    mongoose.connect('mongodb://localhost/mydatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}

module.exports = connecDB

require('./student_model.js')