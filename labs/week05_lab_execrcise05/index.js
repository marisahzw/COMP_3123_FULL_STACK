const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');


app.use(express.json());


let userData = {};

fs.readFile('user.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading user.json:', err);
  } else {
    userData = JSON.parse(data);
  }
});

router.get('/home', (req, res) => {
  fs.readFile('home.html', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

router.get('/profile', (req, res) => {
  res.json(userData);
});

router.get('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (!username || !password) {
    res.status(400).json({
      status: false,
      message: "Username and password are required."
    });
  } else if (userData.username === username && userData.password === password) {
    res.json({
      status: true,
      message: "User is valid"
    });
  } else {
    res.json({
      status: false,
      message: "Invalid username or password"
    });
  }
});

router.get('/logout/:username', (req, res) => {
  const username = req.params.username;
  res.send(`<b>${username} successfully logged out.</b>`);
});

app.use('/', router);

app.listen(process.env.PORT || 8081);

console.log('Web Server is listening at port ' + (process.env.PORT || 8081));

const errorMiddleware = (err, req, res, next) => {
  console.log("Middleware Error Handling");
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'development' ? err.stack : err.stack
  });
};




app.use(errorMiddleware)
