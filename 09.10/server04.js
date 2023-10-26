const { DESTRUCTION } = require("dns");
const express = require("express")
const app = express()
const PORT = 3000;
const formidable = require('formidable');


app.use(express.json());

const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../09.10/static/progress.html"))
})

app.post("/HandleForm", function (req, res) {
    let form = formidable({});
    form.uploadDir = __dirname + '/static/upload/'
    let end = 0
    let begin = 0

    let tab = []
    form.on("progress", function (bytesReceived, bytesExpected) {
        // console.log("progress ", bytesExpected, bytesReceived, new Date().getTime())
        let progress = "progress " + ", " + bytesExpected + ", " + bytesReceived + ", " + new Date().getTime()
        tab.push(progress)
    })

    form.on("fileBegin", function (name, value) {
        // console.log("fileBegin" + new Date().getTime())
        begin = new Date().getTime()
        console.log(begin);
        begin = parseInt(begin)
    })

    form.on("end", function () {
        // console.log("end" + new Date().getTime())
        end = new Date().getTime()
        end = parseInt(end)
    })


    form.parse(req, function (err, fields, files) {
        let fulltime = end - begin
        console.log(end, begin, fulltime);
        let obj = {
            "tab": tab,
            "fulltime": fulltime
        }
        res.header("content-type", "application/json")
        res.send(JSON.stringify(obj, null, 5))
    });





})

app.use(express.static('static'))


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})