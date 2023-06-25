const http = require('http');
const fs = require('fs');
const port = 3000;
let data = require('./src/models/DB/data.json');
const { getAllUser, createUser, deleteUserbyId,updatedUser } = require('./src/controllers/controllers');

const server = http.createServer((req, res) => {

  if (req.url === '/api' && req.method === 'GET') {

    getAllUser(res);

  } else if (req.url === '/api' && req.method === 'POST') {

    createUser(req, res, fs);

  } else if (req.url.match(/\/api\/\w+/) && req.method === 'PUT') {

    updatedUser(req,res, fs);
  }
  else if (req.url.match(/\/api\/\w+/) && req.method === 'DELETE') {
    deleteUserbyId(req, res, fs);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
