import express, { Request, Response, NextFunction } from "express"
var app = express()
var multer = require('multer')
let upload = multer({ dest: __dirname + "../uploads/" });
import * as path from "path"

app.use("/uploads", express.static("../uploads"));
app.use("/", express.static("../build"))
app.use("/", express.static("../public"))


const template = path.resolve(__dirname + "/build/index.html");
app.all("/*", (req: Request, res: Response, next: NextFunction) => { // needed for react router
  res.sendFile(template);
});

app.listen(4000, ()=> {
    console.log("Server running on port 4000")
})