const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
user: "root",
host: "localhost",
password: "",
database: "workers-signup",
});

app.post('/SignUp',(req, res)=> {
       const name = req.body.Name
       const city = req.body.city
       const phNum = req.body.phoneNumber
       const seoff = req.body.servicesoffered
       const email = req.body.Email
       const pass = req.body.password
       const resetpass = req.body.resetpassword

    db.query(
        "INSERT INTO mworkers(Name,City,phoneNumber,servicesoffered,Email,password,resetpassword) VALUES (?,?,?,?,?,?,?)"
        ,[name,city,phNum,seoff,email, pass ,resetpass],
        (err, result) =>{
            console.log(err);
        } 
        );
    });


    
    
app.listen(3001, () =>{
    console.log("running on port 3001");
});

