const fs = require('fs');
const data = fs.readFileSync("./data.txt");
// console.log(data.toString());
// fs.writeFileSync("./data.txt", "Hey, this is my new work", "utf-8");
fs.appendFileSync("./data.txt", "Hey, this is my original work", "utf-8");
// fs.renameSync("./data1.txt", "./data2.txt");
// fs.unlinkSync("./data2.txt");


