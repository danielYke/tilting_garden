const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Home route')
})

app.get('/events', (req, res) => {
    res.send('events route')
})

app.get('/new', (req, res) => {
    res.send('new route')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
