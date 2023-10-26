const express = require("express")
const app = express()
const PORT = 3000;

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));


const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../static/formularzauta.html"))
    let newCar = ""
    let t = "<form>"
    let tab = ["a", "ab"]

    //     for () {

    //         t += `
    // <label for="${tab[i]}">${newCar}</label>
    // <input type="radio" name="${newCar}" id="" value="nowe">
    // <label for="nowe">Nowe</label>
    // <input type="radio" name="${newCar}" id="" value="uzywane">
    // <label for="uzywane">Uzywane</label>
    // <input type="radio" name="${newCar}" id="" value="powypadkowe">
    // <label for="powypadkowe">Powypadkowe</label>
    // `
    //     }
})

app.get("/HandleFormCars", function (req, res) {
    res.send(req.query)
})


app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})