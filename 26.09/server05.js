const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json());

const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../static/zad5.html"))
})


app.post("/HandleForm", function (req, res) {
    let redval = req.body.redval
    let blueval = req.body.blueval
    let greenval = req.body.greenval
    let alphaval = req.body.alphaval
    obj = {
        "red": redval,
        "blue": blueval,
        "green": greenval,
        "alpha": alphaval,
    }
    res.send(JSON.stringify(obj))
})

app.use(express.static('static'))


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})