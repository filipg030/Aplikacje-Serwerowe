const express = require("express")
const app = express()
const PORT = 3000;
app.use(express.json());

app.use(express.json());
const fs = require("fs")

const path = require("path")

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./static/index.html"))
})
let tab1 = []
let tab2 = []
app.post("/sendfiles", function (req, res) {
    let files = req.body.files

    fs.readdir(__dirname + "/static/cwiczenia/lekcja1", function (err, tab1) {
        if (err) {
            return console.log(err);
        }
        console.log(tab1)
        files.push(tab1)

        fs.readdir(__dirname + "/static/cwiczenia/lekcja2", function (err, tab2) {
            if (err) {
                return console.log(err);
            }
            //console.log(tab2)

            files.push(tab2)
            console.log(tab2);
            //  res.header("content-type", "application/json")
            res.send(files)

        })


    })





})




app.use(express.static('static'))
app.use(express.static('static/cwiczenia'))


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})