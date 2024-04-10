const express = require("express");
const serverLog = require('./.public/serverLog')


const app = express()
app.use(serverLog);


app.get("/", (req, res) => {
    res.send("<h1>Home</h1>")
});
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({
        message,
    });
});

app.listen(4000)