const express = require('express');
const app = express();
const cors = require('cors');
const controller= require('./controller');


//give access to all correct domains without blocking
app.use(cors());
//use urlencoded to prase incoming data with all data type
app.use(
    express.urlencoded({
        extended:true,
    })
);
//use json to prase incoming data with json data type
app.use(express.json());


app.get('/users',(req,res) => {

    controller.getUsers(users=>{
        res.send(users);
    });

});

app.get('/user',(req,res)=>{
    const id =req.query.id;
    controller.getUsersById(id,user =>{
        res.send(user);
    });
});

//import rotes
module.exports = app;
