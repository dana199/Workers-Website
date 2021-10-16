/*const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user:'root',
    password:'',
    database:'workers-signup'
    });
module.exports = function(app){
   
    app.get ('/', function(req,res){
        connection.query('SELECT *FROM user', function(err,data)
      {
          (err)?res.send(err):res.json({user:data});
      });
    });
};*/