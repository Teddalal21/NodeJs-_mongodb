// const db = require('./views/layouts/models/db.js')
const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyParser = require('body-parser'); 
const studentController = require("./views/layouts/controllers/studentController.js");
const { urlencoded } = require('body-parser')
const mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://localhost/student', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send(`
    <h1>Welcome to students Database</h1>
    <h2>Click here to get access to the <b><a href = "/student/list">Database</a></b></h2>`)
})

app.set('views', path.join(__dirname, '/views/'))

app.engine('hbs', exphbs({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: 'hbs',
    defaultLayout:'MainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}))

app.set("view engine", "hbs");
app.use('/student', studentController);

app.listen(3000, () => {
    console.log('Server is started at port 3000 ');
});
