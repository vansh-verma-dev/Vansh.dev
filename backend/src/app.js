const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welocme Vansh Verma...")
})

module.exports = app;
