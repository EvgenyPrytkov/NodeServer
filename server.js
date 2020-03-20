const cors = require('cors');
const express = require('express');
const fs = require('fs');
const util = require('util');
const app = express();
const port = 4564;
const users = require('./users').users;

// function getAllUsers() {
//     return util.promisify(fs.readFile)("users.json", "utf-8");
// }

// app.use((err, request, response, next) => {
//     console.log(err);
//     response.status(500).send(`Something broke!`);
// });

// app.get(`/users`, (request, response) => {
//     // response.send(users);
//     getAllUsers().then(data => response.send(JSON.parse(data)));
// });

// app.get(`/`, (request, response) => {
//     response.send('Hello from Express');
// });

// app.get(`/users/:id`, (request, response) => {
//     getAllUsers().then(data => response.send(JSON.parse(data).find(user => user.id == request.params.id)));
// });

// app.post(`/users`, (request, response) => {
//     const user = request.body;
//     console.log(request.body);
//     response.end()
// })

const addNewUser = (req, res) => {
    users.push(req.body);
    res.status(200).send(users).end();
}

const allUsersData = (req, res) => {
    res.status(200).send(users).end();
}

const cathcError = (err, req, res, next) => {
    console.log(err);
    res.status(500).send(`Something broke!`).end();
}

const getUserById = (req, res) => {
    const user = users.filter(user => user.id == req.params.id);
    res.status(200).send(user).end();
}

const redirectHome = (req, res) => {
    res.redirect('/users');
}

app.use(cors());
app.use(express.json());
app.get('/', redirectHome);
app.get('/users', allUsersData);
app.get('/users/:id', getUserById);
app.post('/users', addNewUser);
app.use(cathcError);

app.listen(port, 'localhost', () => console.log('listening'))
