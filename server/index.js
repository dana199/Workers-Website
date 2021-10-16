const express = require("express"); // express is a modul of node to make routes to database
const bodyParser= require('body-parser');
const cors =require('cors');
const app = express();
const mysql=require('mysql');

const PORT = process.env.PORT || 3001; //set the port to 3001

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
app.use(bodyParser.urlencoded({extended:true}));

app.get ('/api/get',function(req,res){
const sqlselect=
"SELECT * FROM mworkers;"
connection.query(sqlselect,(err,result)=>{
   res.send(result);
});
})

app.post('/api/login',function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const sqlsel="SELECT * FROM mworkers WHERE username = ?;"
    connection.query(sqlsel,[username],(err,result)=>{
        console.log(err);
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