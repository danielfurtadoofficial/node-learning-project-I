const path = require("path");

//Just file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object  
console.log(path.parse(__filename));


//Create path object  
console.log(path.join(path.dirname(__filename), "test", "test.html"));