const express = require('express')
const router = express.Router()
const db = require('../../../data/dbConfig')

router.get('/', async (req, res, next) => {
  try {
    res.json(await db("cars").select())
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const car = await db("cars").where("id", req.params.id).select()
    res.json(car)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const [id] = await db("cars").insert(req.body)
    res.json(await db("cars").where("id", req.params.id).first())
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    await db("cars").where("id", req.params.id).update(req.body)
    res.json(await db("cars").where("id", req.params.id).first())
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await db("cars").where("id", req.params.id).del()
    res.status(204).json({ id: req.params.id })
  } catch (error) {
    next(error)
  }
})

module.exports = router