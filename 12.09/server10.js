const express = require("express")
const app = express()
const PORT = 3000;


app.get("/", function (req, res) {
    console.log(req.query.value)
    console.log(req.query.toRad)
    let toRad = req.query.toRad
    let value = req.query.value
    if (toRad == 'true') {
        let returnValue = value * 0.0175
        res.send(value + " stopni w radianach to okolo: " + returnValue)
    } else if (toRad == 'false') {
        let returnValue = value * 57.3
        res.send(value + " radianow w stopniach to okolo:" + returnValue)
    } else {
        res.send("Podano zle parametry")
    }

})



// start

app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})