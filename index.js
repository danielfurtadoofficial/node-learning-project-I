//const { Person } = require("./person.js");
//const person = new Person("Daniel Furtado");
const dotenv = require("dotenv");
const DBConnection = require("./src/database/connect.js");

dotenv.config();


DBConnection();
//console.log(person.sayMyName());
//require("./modules/path.js");
//require("./modules/fs.js");
//require("./modules/http.js");
//require("./modules/express.js");