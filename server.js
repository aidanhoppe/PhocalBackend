import express from 'express'
import { generateUploadURL } from './s3.js'
// import morgan from 'morgan'
// import { Pool } from 'pg'
// const express = require('express')
//const morgan = require('morgan')
// const { Pool } = require('pg')

const app = express()

// app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))
// app.use(express.static('front'))

// https://gist.githubusercontent.com/meech-ward/1723b2df87eae8bb6382828fba649d64/raw/ee52637cc953df669d95bb4ab68ac2ad1a96cd9f/lotr.sql
// const pool = new Pool({
//   host: process.env.POSTGRES_HOST,
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DATABASE,
// })

// function getRandomInt(max) {
//   return 1 + Math.floor(Math.random() * (max-1))
// }

// async function getCharacter(id) {
//   const [characters] = await pool.promise().query("SELECT * FROM characters WHERE id = ?", [
//     id,
//   ])
//   return characters[0]
// }
// async function randomId() {
//   const [rows] = await pool.promise().query(
//     "SELECT COUNT(*) as totalCharacters FROM characters"
//   )
//   const { totalCharacters } = rows[0]
//   const randomId = getRandomInt(totalCharacters)
//   return randomId
// }

app.get("/test", (req, res) => {
  res.send("<h1>It's working 🤗</h1>")
})

app.get("/", async (req, res) => {
  try {
    // const id = await randomId()
    // const character = await getCharacter(id)
    res.send('success')
  } catch (error) {
    res.send(error)
  }
})

app.get("/home/newlistings", async (req, res) => {
  try {
    // const id = await randomId()
    // const character = await getCharacter(id)
    res.send('success')
  } catch (error) {
    res.send(error)
  }
})
app.get("/home/myfeed", async (req, res) => {
  try {
    // const id = await randomId()
    // const character = await getCharacter(id)
    res.send('success')
  } catch (error) {
    res.send(error)
  }
})
app.get("/home/shops", async (req, res) => {
  try {
    // const id = await randomId()
    // const character = await getCharacter(id)
    res.send('success')
  } catch (error) {
    res.send(error)
  }
})

app.get("/:id", async (req, res) => {
  try {
    // const id = parseInt(req.params.id) || await randomId()
    // const character = await getCharacter(id)
    res.send('id')
  } catch (error) {
    res.send(error)
  }
})

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))