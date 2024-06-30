//create a express server

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/about", (req, res) => {       
    const myName = req.query.name;          
    res.send(`<h1>Hello,${myName}</h1>`);
});

app.listen(5000, () => {
    console.log("listening on port 5000");
})