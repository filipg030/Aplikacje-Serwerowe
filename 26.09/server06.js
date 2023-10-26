const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json());

const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../static/zad6.html"))
})


app.post("/HandleForm", function (req, res) {

})

app.use(express.static('static'))


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})