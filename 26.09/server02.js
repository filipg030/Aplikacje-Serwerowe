const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json());

const path = require("path")
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../static/fetchNoForm.html"))
})

app.post("/HandleForm", function (req, res) {
    console.log(req.body);
    let num1 = req.body.num1
    num1 = parseInt(num1)
    let num2 = req.body.num2
    num2 = parseInt(num2)
    let operator = req.body.operation
    if (operator == "add") {
        let ans = num1 + num2
        let obj = {
            "message": "suma dwu elementow",
            "wynik": ans
        }
        res.header("content-type", "application/json")
        res.send(JSON.stringify(obj))
    } else if (operator == "sub") {
        let ans = num1 - num2
        let obj = {
            "message": "roznica dwu elementow",
            "wynik": ans
        }
        res.header("content-type", "application/json")
        res.send(JSON.stringify(obj))
    } else if (operator == "mult") {
        let ans = num1 * num2
        let obj = {
            "message": "iloczyn dwu elementow",
            "wynik": ans
        }
        res.header("content-type", "application/json")
        res.send(JSON.stringify(obj))
    } else if (operator == "divide") {
        if (num2 != 0) {
            ans = num1 / num2
        } else {
            ans = "Cant divide by zero"
        }
        let obj = {
            "message": "iloraz dwu elementow",
            "wynik": ans
        }
        res.header("content-type", "application/json")
        res.send(JSON.stringify(obj))
    } else if (operator == 'all') {
        let ans1 = num1 + num2
        let tab = []
        let obj = {
            "message": "suma dwu elementow",
            "wynik": ans1
        }
        tab.push(obj)
        let ans2 = num1 - num2
        obj = {
            "message": "roznica dwu elementow",
            "wynik": ans2
        }
        tab.push(obj)
        let ans3 = num1 * num2
        obj = {
            "message": "iloczyn dwu elementow",
            "wynik": ans3
        }
        tab.push(obj)
        if (num2 != 0) {
            ans4 = num1 / num2
        } else {
            ans4 = "Cant divide by zero"
        }
        obj = {
            "message": "iloraz dwu elementow",
            "wynik": ans4
        }
        tab.push(obj)
        res.header("content-type", "application/json")
        res.send(JSON.stringify(tab))
    }

})

app.use(express.static('static'))


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})