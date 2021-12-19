const express = require("express"); // express is a modul of node to make routes to database
const cors =require('cors');
const mysql=require('mysql');
const multer = require('multer');
const path = require('path');
const bodyParser= require('body-parser');
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const app = express();
const PORT = process.env.PORT || 3001; //set the port to 3001
   //CONNECTION WITH DATABASE//
const connection = mysql.createConnection({ host: 'localhost', port: 3308, user:'root', password:'', database:'website' });
connection.connect(function(err){ (err)? console.log(err): console.log(connection);});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//FOR CONNTACT FORM//
app.post('/api/forma',(req,res)=>{
  let data= req.body
  let smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: "servicesh717@gmail.com",
    pass: "11715040",
  }
  });
  let mailOptions ={
    from:data.email,
    to:"servicesh717@gmail.com",
    subject:`Message from ${data.name}`,
    html:`
      <h3>Informations</h3>
      <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
      <li>phone: ${data.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${data.message}</p>
    `,
  };
  smtpTransport.sendMail(mailOptions,(error,response)=>{
    if(error){
      res.send(error)
    } else{
      res.send('success')
    }
  })
  smtpTransport.close();
})

//FOR GET ALL DATA FROM USERS TABLE//
app.get ('/api/get',function(req,res){
const sqlselect="SELECT * FROM users;"
connection.query(sqlselect,(err,result)=>{
   res.send(result);
});
})

//For Update userprofile data//
app.put('/update',function(req,res){
  const sqlupdate= "UPDATE SET users Name = ? City = ? Email = ? phoneNumber = ? Disc = ? WHERE id=?;"
  const username=req.body.name;
  const email=req.body.email;
  const city=req.body.city;
  const phone=req.body.phoneNumber;
  const Description=req.body.Description;
  connection.query(sqlupdate,[username,email,city,phone,Description],(err,result)=>{
    console.log(err);
  })
})
//FOR INSERT DATA TO USERS TABLE//
app.post ("/insert", function(req,res){
    const Name=req.body.Name
    const City=req.body.City
    const Disc=req.body.disc
    const phoneNumber=req.body.phoneNumber
    const Face=req.body.Face
    const servicesoffered=req.body.servicesoffered
    const Email=req.body.Email
    const password=req.body.password
    const resetpassword=req.body.resetpassword

    const sqlinsert =
  "INSERT INTO users(Name,City,Disc,phoneNumber,Face,servicesoffered,Email,password,resetpassword) VALUES (?,?,?,?,?,?,?,?,?);"
    connection.query(sqlinsert,[Name,City,Disc,phoneNumber,Face,servicesoffered,Email,password,resetpassword],(err,result)=>{
        console.log(err);
    });
});
//FOR LOGIN FORM//
app.post("/login", function (req, res) {
  const email= req.body.email; //value from textfield
  const password = req.body.password; //value from textfield
  
  if (email && password) {
    // if user fill all text input
    connection.query(
      "SELECT * FROM users where Email=? OR password=?", //update
      [email,password],
      function (err, row) {
        if (err) {
          res.send({err: err});
         }
         
         if(row.length > 0){
          res.send(row[0]);
         }
         else{
          res.send({error: "user not found"});
         }
 
       /* if (row.length < 1) {
          res.send({

            success: false,
            message: "Incorrect Name and/or Password!",
          });
        }
       /*  else if (row.length > 1) {
          console.log(email);

            res.send(
              row
            /*  success: true,
              username: row[0].Name,
           
            );
           } */
         /*  else {
          res.send({
            success: false,
            message: "Incorrect Email and/or Password!",
          });
        }*/
      }
    );
  }/* else {
    res.send({ message: "Please enter Username and Password!" });
    res.end();
  }*/
});
app.listen(PORT, () =>{
    console.log("APP running on port 3001" );
});