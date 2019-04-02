const express = require("express")
const app = express()
const path = require('path')
const PORT = 8000

app.use(express.json({
  type: ['application/json', 'text/plain']
}))

const apiObj = {
  title: "Posted Messages",
  message: []
}

app.get("/", function(req, res){
  console.log("🗂 Server recieves default request / serves HTML 🗂")
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get("/api", function(req, res){
  console.log("❇️ GET request recieved!")
  res.status(200).json(apiObj)
})

app.post("/api", function(req, res){
  console.log("🅿️ POST request recieved!")
  console.log("post /api", req.body)
  apiObj.message.push(req.body)
  res.status(200).json(req.body)
})

app.listen(PORT, function() {
  console.log(`🌋  API Server on PORT: ${PORT} 🏡`)
})
