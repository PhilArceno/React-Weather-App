import express, { Request, Response, NextFunction } from "express"
var app = express()
var multer = require('multer')
let upload = multer({ dest: __dirname + "../uploads/" });
import React from 'react'
import { renderToString } from "react-dom/server"
import * as path from "path"
import * as api from "../api"
import App from '../src/components/App'


app.use("/uploads", express.static("../uploads"));
app.use("/", express.static("../build"))
app.use("/", express.static("../public"))

app.post("/get/weather", upload.none(), async (req, res) => {
  try {
    console.log('yes')
    let { longtitude, latitude } = req.body
    if (!longtitude || !latitude) {
      throw new Error("Missing params!")
    }
    let data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${api.openWeatherApi}`)
    let body = await data.text()
    let parsed = JSON.parse(body)
    res.send(JSON.stringify({ success: true, weather: parsed }))
  } catch (err) {
    console.log(err)
    res.send(JSON.stringify({ success: false }))
  }
})

const html = ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
    <script src="js/client.js" defer></script>
  </html>
`;

// const template = path.resolve(__dirname + "/build/index.html");
app.get("/", (req: Request, res: Response, next: NextFunction) => { // needed for react router
  const body = renderToString(React.createElement(App))

  res.send(
    html({body})
  )
});

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})