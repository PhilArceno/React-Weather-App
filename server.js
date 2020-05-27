var express = require("express")
var app = express()

app.use("/", express.static("./build"))
app.use("/", express.static("./public"))
app.all('/*', (req, res, next) => { // needed for react router
    res.sendFile(__dirname + '/build/index.html');
})

app.listen(4000, ()=> {
    console.log("Server running on port 4000")
})