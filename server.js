/* partie lecture/ecriture fonctionelle

const {readFileSync, writeFileSync} = require("fs");

const data = JSON.parse(readFileSync("./data.json", 'utf-8'));
console.log(data.Tormod.pwd);

const {Tormod} = JSON.parse(readFileSync("./data.json", 'utf-8'));
console.log(Tormod);

data.Tormod.pouets = 169;

const objectToJson = JSON.stringify(data);
console.log(objectToJson);

writeFileSync('./data.json', objectToJson);*/
/////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log('Server up');
});

app.post('/1', (request, response) =>{
    console.log(request.body);
    response.send("e");
});