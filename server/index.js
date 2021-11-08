const express = require("express"); // express is a modul of node to make routes to database
const cors =require('cors');
const mysql=require('mysql');

const bodyParser= require('body-parser');
//const cookieParser = require("cookie-parser");
//const session = require("express-session");
const bcrypt = require("bcrypt");
//const saltRounds = 10;

const app = express();
const PORT = process.env.PORT || 3001; //set the port to 3001

/*app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);*/

const connection = mysql.createConnection({
host: 'localhost',
port: 3308,
user:'root',
password:'',
database:'workers-signup'
});

connection.connect(function(err){
  (err)? console.log(err): console.log(connection);
});

app.use(cors());
app.use(express.json());
//app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.get ('/api/get',function(req,res){
const sqlselect=
"SELECT * FROM users;"
connection.query(sqlselect,(err,result)=>{
   res.send(result);
});
})

app.post ("/api/insert", function(req,res){
    const Name=req.body.Name
    const City=req.body.City
    const phoneNumber=req.body.phoneNumber
    const servicesoffered=req.body.servicesoffered
    const Email=req.body.Email
    const password=req.body.password
    const resetpassword=req.body.resetpassword

    const sqlinsert =
  "INSERT INTO users(Name,City,phoneNumber,servicesoffered,Email,password,resetpassword) VALUES (?,?,?,?,?,?,?);"
    connection.query(sqlinsert,[Name,City,phoneNumber,servicesoffered,Email,password,resetpassword],(err,result)=>{
        console.log(err);
    });
 /* {
      res.send("Dannnaaaaa Helooo");
  });*/
});
//require('./routes/html-routes')(app);
//start the server//

/*app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
*/
app.post("/api/login", function (req, res) {
  var username = req.body.username; //value from textfield
  var password = req.body.password; //value from textfield
  if (username && password) {
    // if user fill all text input
    connection.query(
      "SELECT * FROM users where Name=?", //update
      [username],
      function (error, row) {
        if (row.length < 1) {
          res.send({
            success: false,
            message: "Incorrect Name and/or Password!",
          });
        }
         else if (row.length > 1) {
          console.log(username);

            res.send({
              success: true,
              username: row[0].Name,
           
            });
           } else {
          res.send({
            success: false,
            message: "Incorrect Email and/or Password!",
          });
        }
      }
    );
  } else {
    res.send({ message: "Please enter Username and Password!" });
    res.end();
  }
});
app.listen(PORT, () =>{
    console.log("APP running on port 3001" );
});