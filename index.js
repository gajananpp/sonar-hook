const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/speedops-sonar', (req, res) => {
  console.log(req.body)
  res.status(200).send("I'm alive!")
})

httpServer = http.createServer(app)

httpServer.listen(process.env.PORT || 8080, () => {
  console.log('server is up.')
})

module.exports = httpServer
