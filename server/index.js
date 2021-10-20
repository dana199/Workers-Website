const express = require("express"); // express is a modul of node to make routes to database
const cors =require('cors');
const mysql=require('mysql');

const bodyParser= require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();


const PORT = process.env.PORT || 3001; //set the port to 3001

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

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
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.get ('/api/get',function(req,res){
const sqlselect=
"SELECT * FROM mworkers;"
connection.query(sqlselect,(err,result)=>{
   res.send(result);
});
})

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post('/api/login',function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const sqlsel="SELECT * FROM mworkers WHERE username = ? AND password =?;"
    connection.query(sqlsel,[username,password],(err,result)=>{
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
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
  "INSERT INTO mworkers(Name,City,phoneNumber,servicesoffered,Email,password,resetpassword) VALUES (?,?,?,?,?,?,?);"
    connection.query(sqlinsert,[Name,City,phoneNumber,servicesoffered,Email,password,resetpassword],(err,result)=>{
        console.log(err);
    });
 /* {
      res.send("Dannnaaaaa Helooo");
  });*/
});
//require('./routes/html-routes')(app);
//start the server//
app.listen(PORT, () =>{
    console.log("APP running on port 3001" );
});