

function createUserData(data, res, fs) {
    console.log(data);
    fs.writeFile('./src/models/DB/data.json', JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            throw err;
        } else {
            res.statusCode = 201;
            res.end('Resource created successfully');
        }
    });
}

function updatedUsersData(res,data,fs) {
    fs.writeFile('./src/models/DB/data.json', JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error updating data in the database');
        } else {
            res.statusCode = 200;
            res.end('Data updated successfully');
        }
    });
}

function deleteUserDataById(res, newData, fs) {
    fs.writeFile('./src/models/DB/data.json', JSON.stringify(newData), 'utf-8', (err) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error deleting data from the database');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Data deleted successfully' }));
        }
    });
}

module.exports = {
    createUserData, updatedUsersData, deleteUserDataById
}