const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  const date = new Date();
    res.send(`Hoy es ${date.getDay()}/${(date.getMonth() + 1)}/${date.getFullYear()}`);
  });
  
app.get('/text', (req, res) =>{
  fs.readFile('text.txt', 'utf8', (err, data) =>{
    res.send(data);
  })
});

  app.listen(port, () =>{
    console.log(`Corriendo en el servidor https://localhost:${port}`)
  });