const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World Santiago')
})
 
app.listen(3000, ()=>{
    console.log("Executando na porta 3000");
});