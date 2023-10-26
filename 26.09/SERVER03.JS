const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json());

const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../static/zad3.html"))
})

let tab = []

app.post("/HandleForm", function (req, res) {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let message = req.body.message
    let logtime = req.body.logtime
    obj = {
        "message": message,
        "name": firstName,
        "lastname": lastName,
        "logtime": logtime
    }
    tab.push(obj)
    res.send(JSON.stringify(tab))
})

app.use(express.static('static'))


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})