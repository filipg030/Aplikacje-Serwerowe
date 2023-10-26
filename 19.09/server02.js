const express = require("express")
const app = express()
const PORT = 3000;


const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../static/formularz.html"))
})

app.get("/HandleForm", function (req, res) {
    res.send("<html style='background-color: " + req.query.color + "; display: flex; justify-content: center; align-items: center; font-size: 100px; color: white;'>" + req.query.color + "</html>")
})


app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})