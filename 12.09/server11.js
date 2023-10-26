const exp = require("constants");
const express = require("express")
const app = express()
const PORT = 3000;

const path = require("path")

app.get("/product_id/:id", function (req, res) {
    let id = req.params.id

    if (id == 1) {
        res.sendFile(path.join(__dirname + "/static/products/product1.html"))
    }
    else if (id == 2) {
        res.sendFile(path.join(__dirname + "/static/products/product2.html"))
    }
    else if (id == 3) {
        res.sendFile(path.join(__dirname + "/static/products/product3.html"))
    } else {
        res.status(404).send("brak strony takiego produktu")
    }
})



// start

app.use(express.static(__dirname + '/static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})