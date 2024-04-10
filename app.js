const express = require("express");
const serverLog = require('./.public/serverLog')


const app = express()
app.use(serverLog);


app.get("/", (req, res) => {
    res.send("<h1>Home</h1>")
});

app.listen(4000, ()=>console.log("Server running"))