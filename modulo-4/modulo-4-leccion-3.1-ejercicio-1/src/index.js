const express = require('express');
const cors = require('cors');

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public';
server.use(express.static(staticServerPath));

// users

const users = [
  {
    name: 'Sofia',
    email: 'sofia.gracia@gmail.com'
  },
  {
    name: 'Maria',
    email: 'lamorti@adalab.com'
  }
]; // fake users data base

// api endpoints

server.post('/user', (req, res) => {
  console.log('Body params:', req.body);
  console.log('Body param userName:', req.body.userName);
  console.log('Body param userEmail:', req.body.userEmail);

  // add new user to daba base
  users.push({
    name: req.body.userName,
    email: req.body.userEmail
  });

  res.json({
    result: 'User created'
  });
});

server.post('/users', (req, res) => {
  console.log(req.body)
  const nameFilter = req.body.name;
  const emailFilter = req.body.email;
  const filterUser = users
    .filter((each) => each.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((each) => each.email.toLowerCase().includes(emailFilter.toLowerCase()))
  res.json({
    result: filterUser
  });
});
