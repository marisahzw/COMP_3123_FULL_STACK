var express = require("express")


const SERVER_PORT = 8089
var app = express()

app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
  });

  app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Tafadzwa';
    const lastname = req.query.lastname || 'Marisa';
    const user = { firstname, lastname };
    res.send(user);
  });
  
  
  app.post('/user', (req, res) => {

    const person ={
      firstname: "Tafadzwa",
      lastname: "Marisa"
    }

    res.send(person)
});
  

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})

