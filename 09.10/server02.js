const express = require("express")
const app = express()
const PORT = 3000;
const formidable = require('formidable');


app.use(express.json());

const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../09.10/static/sendMulti.html"))
})

app.post("/HandleForm", function (req, res) {
    let form = formidable({});
    form.uploadDir = __dirname + '/static/upload/'
    form.multiples = true
    form.parse(req, function (err, fields, files) {
        // console.log(fields.data);
        // console.log(files);
        let tab = []
        let date = fields.data
        let obj1 = {
            "date": date,
        }
        tab.push(obj1)
        tab.push(files)
        res.header("content-type", "application/json")
        res.send(JSON.stringify(tab, null, 5))
    });



})

app.use(express.static('static'))


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})