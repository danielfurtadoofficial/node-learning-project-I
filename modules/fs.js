const { error } = require("console");
const fs = require("fs");
const path = require("path");

//create a folder
/*fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if (error) {
        return console.log("Error: ", error);
    }
    console.log("Folder succesfully created");
})*/

//create a file
fs.writeFile(path.join(__dirname, "test", "test.txt"), "Hello, I m now pro in node!", (error) => {
    if (error) {
        return console.log("Error: ", error);
    }
    console.log("File succesfully created");

    //append a file
    fs.appendFile(path.join(__dirname, "test", "test.txt"), " Hello, I m now twice pro in node!", (error) => {
        if (error) {
            return console.log("Error: ", error);
        }
        console.log("File succesfully updated");
    })

    //read file
    fs.readFile(path.join(__dirname, "test", "test.txt"), "utf8", (error, data) => {
        if (error) {
            return console.log("Error: ", error);
        }
        console.log(data);
    })
})

