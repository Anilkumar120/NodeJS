const { createUserData, deleteUserDataById, updatedUsersData } = require("../models/models");
let data = require('../models/DB/data.json');

function getAllUser(res) {
  res.write(JSON.stringify(data))
  res.end();
}

function createUser(req, res, fs) {
  let body = '';
  let newData = [];
  newData = data;
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const newResource = JSON.parse(body);
    data.push(newResource);
    console.log(data);
    createUserData(data, res, fs);
  });
}
function updatedUser(req, res, fs) {
  let body = '';
  let updatedData = {};
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    updatedData = JSON.parse(body);
    console.log(updatedData);

    let arr = data;
    let id = Number(req.url.split('/')[2]);
    const newArr = arr.map((item) => {
      if (item.id === id) {
        return { id, ...updatedData };
      }
      return item;
    });
    console.log(newArr);

    data = newArr;
    updatedUsersData(res, data, fs);
  });
}

function deleteUserbyId(req, res, fs) {
  try {
    let id = Number(req.url.split('/')[2]);
    const newData = data.filter((item) => item.id !== id);
    deleteUserDataById(res, newData, fs);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

module.exports = {
  getAllUser, createUser, updatedUser, deleteUserbyId
}