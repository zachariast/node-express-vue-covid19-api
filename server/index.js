const express = require('express')
const app = express()

const scapeTable = require('./scrapeTables')

app.get('/', async (req, res) => {
  try {
    const data = await scapeTable()
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})

app.listen(3001, () => {
  console.log('http://localhost:3001')
})
