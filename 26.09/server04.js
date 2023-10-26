const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json());

const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../static/zad4.html"))
})


app.post("/HandleForm", function (req, res) {
    let range1val = req.body.range1val
    let range2val = range1val * 2
    res.send(JSON.stringify({ x: range2val }))

})

app.use(express.static('static'))


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})