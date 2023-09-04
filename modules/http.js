const http = require("http");
const port = 9090;
const server = http.createServer((req, res) => {
    if(req.url === "/home"){
        res.writeHead(200, { "Content-Type": "text/html"})
        res.end("<h1>HOME PAGE</h1>");
    }

    if(req.url === "/users"){
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
        res.writeHead(200, { "Content-Type": "application/json"});
        res.end(JSON.stringify(users));
    }
});

server.listen(port, ()=> console.log(`Listening in port ${port}!`));