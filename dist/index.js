var $4UN2M$http = require("http");
var $4UN2M$fs = require("fs");



const $383e46f26d360885$var$port = 3000;
var $c323a4db92e190e3$exports = {};
$c323a4db92e190e3$exports = JSON.parse('[{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"}},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}},{"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org","address":{"street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}},"phone":"493-170-9623 x156","website":"kale.biz","company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"}},{"id":5,"name":"Chelsey Dietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca","address":{"street":"Skiles Walks","suite":"Suite 351","city":"Roscoeview","zipcode":"33263","geo":{"lat":"-31.8129","lng":"62.5342"}},"phone":"(254)954-1289","website":"demarco.info","company":{"name":"Keebler LLC","catchPhrase":"User-centric fault-tolerant solution","bs":"revolutionize end-to-end systems"}},{"id":6,"name":"Mrs. Dennis Schulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","address":{"street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}},"phone":"1-477-935-8478 x6430","website":"ola.org","company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"}},{"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz","address":{"street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}},"phone":"210.067.6132","website":"elvis.io","company":{"name":"Johns Group","catchPhrase":"Configurable multimedia task-force","bs":"generate enterprise e-tailers"}},{"id":8,"name":"Nicholas Runolfsdottir V","username":"Maxime_Nienow","email":"Sherwood@rosamond.me","address":{"street":"Ellsworth Summit","suite":"Suite 729","city":"Aliyaview","zipcode":"45169","geo":{"lat":"-14.3990","lng":"-120.7677"}},"phone":"586.493.6943 x140","website":"jacynthe.com","company":{"name":"Abernathy Group","catchPhrase":"Implemented secondary concept","bs":"e-enable extensible e-tailers"}},{"id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io","address":{"street":"Dayna Park","suite":"Suite 449","city":"Bartholomebury","zipcode":"76495-3109","geo":{"lat":"24.6463","lng":"-168.8889"}},"phone":"(775)976-6794 x41206","website":"conrad.com","company":{"name":"Yost and Sons","catchPhrase":"Switchable contextually-based project","bs":"aggregate real-time technologies"}},{"id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz","address":{"street":"Kattie Turnpike","suite":"Suite 198","city":"Lebsackbury","zipcode":"31428-2261","geo":{"lat":"-38.2386","lng":"57.2232"}},"phone":"024-648-3804","website":"ambrose.net","company":{"name":"Hoeger LLC","catchPhrase":"Centralized empowering task-force","bs":"target end-to-end models"}},{"message":"hello","movie":"Kick","url":"http://www.hello.com/"},{"id":12,"name":"Ram Kumar","street":"Japan","suite":"house.6","city":"Una","zipcode":"5474563548","username":"Arjun"}]');


var $30233a3a58326008$exports = {};
var $a883dc9c6e04d464$exports = {};
function $a883dc9c6e04d464$var$createUserData(data, res, fs) {
    console.log(data);
    fs.writeFile("./src/models/DB/data.json", JSON.stringify(data), "utf-8", (err)=>{
        if (err) throw err;
        else {
            res.statusCode = 201;
            res.end("Resource created successfully");
        }
    });
}
function $a883dc9c6e04d464$var$updatedUsersData(res, data, fs) {
    fs.writeFile("./src/models/DB/data.json", JSON.stringify(data), "utf-8", (err)=>{
        if (err) {
            res.statusCode = 500;
            res.end("Error updating data in the database");
        } else {
            res.statusCode = 200;
            res.end("Data updated successfully");
        }
    });
}
function $a883dc9c6e04d464$var$deleteUserDataById(res, newData, fs) {
    fs.writeFile("./src/models/DB/data.json", JSON.stringify(newData), "utf-8", (err)=>{
        if (err) {
            res.statusCode = 500;
            res.end("Error deleting data from the database");
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                message: "Data deleted successfully"
            }));
        }
    });
}
$a883dc9c6e04d464$exports = {
    createUserData: $a883dc9c6e04d464$var$createUserData,
    updatedUsersData: $a883dc9c6e04d464$var$updatedUsersData,
    deleteUserDataById: $a883dc9c6e04d464$var$deleteUserDataById
};


var $30233a3a58326008$require$createUserData = $a883dc9c6e04d464$exports.createUserData;
var $30233a3a58326008$require$deleteUserDataById = $a883dc9c6e04d464$exports.deleteUserDataById;
var $30233a3a58326008$require$updatedUsersData = $a883dc9c6e04d464$exports.updatedUsersData;

var $30233a3a58326008$require$data = $c323a4db92e190e3$exports;
function $30233a3a58326008$var$getAllUser(res) {
    res.write(JSON.stringify($30233a3a58326008$require$data));
    res.end();
}
function $30233a3a58326008$var$createUser(req, res, fs) {
    let body = "";
    let newData = [];
    newData = $30233a3a58326008$require$data;
    req.on("data", (chunk)=>{
        body += chunk.toString();
    });
    req.on("end", ()=>{
        const newResource = JSON.parse(body);
        $30233a3a58326008$require$data.push(newResource);
        console.log($30233a3a58326008$require$data);
        $30233a3a58326008$require$createUserData($30233a3a58326008$require$data, res, fs);
    });
}
function $30233a3a58326008$var$updatedUser(req, res, fs) {
    let body = "";
    let updatedData = {};
    req.on("data", (chunk)=>{
        body += chunk.toString();
    });
    req.on("end", ()=>{
        updatedData = JSON.parse(body);
        console.log(updatedData);
        let arr = $30233a3a58326008$require$data;
        let id = Number(req.url.split("/")[2]);
        const newArr = arr.map((item)=>{
            if (item.id === id) return {
                id: id,
                ...updatedData
            };
            return item;
        });
        console.log(newArr);
        $30233a3a58326008$require$data = newArr;
        $30233a3a58326008$require$updatedUsersData(res, $30233a3a58326008$require$data, fs);
    });
}
function $30233a3a58326008$var$deleteUserbyId(req, res, fs) {
    try {
        let id = Number(req.url.split("/")[2]);
        const newData = $30233a3a58326008$require$data.filter((item)=>item.id !== id);
        $30233a3a58326008$require$deleteUserDataById(res, newData, fs);
    } catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            error: "Internal server error"
        }));
    }
}
$30233a3a58326008$exports = {
    getAllUser: $30233a3a58326008$var$getAllUser,
    createUser: $30233a3a58326008$var$createUser,
    updatedUser: $30233a3a58326008$var$updatedUser,
    deleteUserbyId: $30233a3a58326008$var$deleteUserbyId
};


var $383e46f26d360885$require$getAllUser = $30233a3a58326008$exports.getAllUser;
var $383e46f26d360885$require$createUser = $30233a3a58326008$exports.createUser;
var $383e46f26d360885$require$deleteUserbyId = $30233a3a58326008$exports.deleteUserbyId;
var $383e46f26d360885$require$updatedUser = $30233a3a58326008$exports.updatedUser;
const $383e46f26d360885$var$server = $4UN2M$http.createServer((req, res)=>{
    if (req.url === "/" && req.method === "GET") {
        res.write("Hello!!");
        res.end();
    } else if (req.url === "/api" && req.method === "GET") $383e46f26d360885$require$getAllUser(res);
    else if (req.url === "/api" && req.method === "POST") $383e46f26d360885$require$createUser(req, res, $4UN2M$fs);
    else if (req.url.match(/\/api\/\w+/) && req.method === "PUT") $383e46f26d360885$require$updatedUser(req, res, $4UN2M$fs);
    else if (req.url.match(/\/api\/\w+/) && req.method === "DELETE") $383e46f26d360885$require$deleteUserbyId(req, res, $4UN2M$fs);
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Not Found");
    }
});
$383e46f26d360885$var$server.listen($383e46f26d360885$var$port, ()=>{
    console.log(`Listening on port ${$383e46f26d360885$var$port}`);
});


//# sourceMappingURL=index.js.map
