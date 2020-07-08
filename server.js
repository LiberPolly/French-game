const express = require('express')
const serveStatic = require('serve-static') 
const path = require('path')
const connectHistory = require('connect-history-api-fallback')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use(connectHistory())

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)