const express = require('express')
const data = require("./MOCK_DATA.json")



const app = express()
const port = 2456



//app.use();

app.get('/',midilleware, (req, res) => {
  res.send(`${JSON.stringify(data)}`)
})

app.get("user", (req, res) => {
  return res.send("sorry no data available")
})



function midilleware(req, res, next) {
req.name = "surya"
console.log("middileware before")
next()


}





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
