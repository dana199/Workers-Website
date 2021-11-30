const express = require("express"); // express is a modul of node to make routes to database
const cors =require('cors');
const mysql=require('mysql');
const multer = require('multer');
const path = require('path');
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

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public_html/', 'uploads'),
  filename: function (req, file, cb) {   
      // null as first argument means no error
      cb(null, Date.now() + '-' + file.originalname )  
  }
})
app.post('/imgupload',async(req,res)=>{
  try {
    // 'avatar' is the name of our file input field in the HTML form

    let upload = multer({ storage: storage}).single('avatar');

    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields

        if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        const classifiedsadd = {
    image: req.file.filename
  };
        const sql = "INSERT INTO users SET ?";
        connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
    res.json({ success: 1 })      

  });  

    }); 

}catch (err) {console.log(err)}

})


app.get ('/api/get',function(req,res){
const sqlselect=
"SELECT * FROM users;"
connection.query(sqlselect,(err,result)=>{
   res.send(result);
});
})

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
app.post("/login", function (req, res) {
  const email= req.body.email; //value from textfield
  const password = req.body.password; //value from textfield
  if (email && password) {
    // if user fill all text input
    connection.query(
      "SELECT * FROM users where Email=? OR Email=?", //update
      [email,email],
      function (err, row) {
        if (err) {
          res.send({err: err});
         }
         
         if(row.length > 0){
            res.send(row);
           console.log("l");
         }
         else{
           
           console.log("wrong combination");
         }
 
       /* if (row.length < 1) {
          res.send({

            success: false,
            message: "Incorrect Name and/or Password!",
          });
        }*/
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