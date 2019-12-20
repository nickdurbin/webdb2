const express = require('express')
const router = express.Router({ mergeParams: true })
const db = require('../../../data/dbConfig')

router.get('/', (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
})

router.get('/:id', (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
})

router.post('/', (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
})

router.put('/:id', (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
})

router.delete('/:id', (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
})

module.exports = router