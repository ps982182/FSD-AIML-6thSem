const read = ()=> {
    const fs = require('fs');
    // const data = fs.readFileSync("./data.txt");
    fs.readFile("./data.txt", "utf-8", (err, data) => {
        if (err) {
              console.error("Error reading file: ", err);   
        }
        else {
            console.log("Data from file: ", data);
        }
    });
}
read();
console.log("Complete me first");

