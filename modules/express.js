const express = require("express");
const app = express();

app.use(express.json());

//:::: MIDDLEWARE ::::
app.use((req, res, next) => {

    console.log(`Request type: ${req.method}`);
    console.log(`Content type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`);

    next();
});

//:::: VIEW ENGINE EJS ::::
app.set("view engine", "ejs");
app.set("views", "src/views");

//:::: USERS VIEW ENGINE ::::::
app.get("/views/users", async (req, res) => {

    try {
        const users = await UserModel.find({});
        res.status(201);
        res.render("index", { users });
    } catch (error) {
        res.status(500).send(error.message);
    }

});

//:::: BASIC SERVER GET RESPONSE ::::
app.get('/home', (req, res) => {

    res.contentType("application/html")
    res.status(200).send("<h1>HOME PAGE</h1>");
})


const UserModel = require("../src/models/user.model");
//:::: USERS CRUD :::::
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }

});


//:::: STARTING SERVER ::::
const port = 9090;
app.listen(port, () => console.log(`Listening with express in port ${port}!`));