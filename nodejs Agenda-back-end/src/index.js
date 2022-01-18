const express = require('express');
const routes = require('../routes/routes');
const bd = require('../models/db');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");     
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER,Content-Type,Authorization");
  app.use(cors())
  next();    
});


app.use(routes);
app.listen(2222,function(){
    console.log("Rodando servidor");
})

    
