const express = require('express');
const app = express();
const path = require('path');


const { handleError } = require("./ErrorHandler/error")

//const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

//database module 
const DbConnection = require('./Database/DbConnection')

//user routes
const userRoutes = require('./Routes/UserRoutes');

//sometimes post body is undefined hence
const cors = require('cors');
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use("/user/v1/", userRoutes);//application middleware

app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});

//middleware for api consol-log
app.use(async (err, req, res, next) => {
    console.log("Fired this api:->: %s %s ", await req.url, await req.meth)
    handleError(err, res);
    // next()

})

