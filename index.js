const express = require('express')
// import express from "express"
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hey there!!!!!!!!!!!!')
})

app.get('/gmail', (req, res) => {
    res.send('sayleedotcom')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})