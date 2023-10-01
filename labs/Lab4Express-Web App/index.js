var express = require("express")


const SERVER_PORT = 8089
var app = express()

app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
  });


  
//QUERY PARAMETER
  app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Tafadzwa';
    const lastname = req.query.lastname || 'Marisa';
    const user = { firstname, lastname };
    res.send(user);
  });
  
  
  //PATH PARAMETER
  app.post('/user/:Firstname/:lastname', (req, res) => {
    const{firstname, lastname} = req.params
    res.send(`Firstname is ${firstname} Last name is ${lastname}`)

});
  

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})

