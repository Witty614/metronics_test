var express = require('express');
var port = process.env.PORT || 5000; //put your preferred port number
var app = express();
var UserController = require("./Controller/UserController");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, 'Content-Type' : 'multipart/form-data' ,* "
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//for routing
app.use('/', UserController); 
app.use('/',express.static('pages'));

app.listen(port,() =>{
    console.log('Server started! At http://localhost:' + port);
  });
