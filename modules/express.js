const express = require("express");
const app = express();
const port = 9090;

app.get('/home', (req, res) => {

    res.contentType("application/html")
    res.status(200).send("<h1>HOME PAGE</h1>");
})

app.get('/users', (req, res) => {
    const users = [
        {
            name: "User 1",
            email: "user1@gmail.com"
        },
        {
            name: "User 2",
            email: "user2@gmail.com"
        },
        {
            name: "User 3",
            email: "user3@gmail.com"
        },
        {
            name: "User 4",
            email: "user4@gmail.com"
        }
    ]
    res.status(200).json(users);
})

app.listen(port, () => console.log(`Listening with express in port ${port}!`));