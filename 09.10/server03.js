const express = require("express")
const app = express()
const PORT = 3000;
const formidable = require('formidable');


app.use(express.json());

const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../09.10/static/bytes.html"))
})

app.post("/HandleForm", function (req, res) {
    let form = formidable({});
    form.uploadDir = __dirname + '/static/upload/'
    form.parse(req, function (err, fields, files) {
        let obj = {
            "Bytes expected": form.bytesExpected,
            "Bytes received": form.bytesReceived
        }
        res.header("content-type", "application/json")
        res.send(JSON.stringify(obj, null, 5))
    });



})

app.use(express.static('static'))


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})