var mysql = require('mysql');

//Aniket's database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Aniket1',
  database: 'user-auth',
  port: '3306',
  insecureAuth: true
});


connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Error connecting database:", err);
  }
});
module.exports = connection;
