const {readFileSync, writeFileSync} = require("fs");

const {name, age} = JSON.parse(readFileSync("./data.json", 'utf-8'));
const oui = JSON.parse(readFileSync("./data.json", 'utf-8'));
console.log(name);
console.log(age);
console.log(oui);

const myData = {
    name: "op",
    age: 255,
    legal: false
}

const toJson = JSON.stringify(myData);

writeFileSync('./myData.json', toJson);