const express = require("express")
const app = express()
const PORT = 3000;



let x = ("#select1").val()
$("#select1").on("change", function () {
    console.log("Change")
})


// start

app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})