const express = require("express")
const app = express()
const PORT = 3000;

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));


const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../static/formularzPOST.html"))
})

app.post("/HandleForm", function (req, res) {
    res.send("<html style='background-color: " + req.body.color + "; display: flex; justify-content: center; align-items: center; font-size: 100px; color: white;'>" + req.body.color + "</html>")
})


app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})