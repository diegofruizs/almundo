'use strict'

const express = require('express')

const hotelCtrl = require('../controllers/hotel')

const api = express.Router()

api.get('/hotel', hotelCtrl.getHotels)
api.get('/hotel/:hotelId', hotelCtrl.getHotel)
api.post('/hotel', hotelCtrl.saveHotel)
api.put('/hotel/:hotelId', hotelCtrl.updateHotel)
api.delete('/hotel/:hotelId',hotelCtrl.deleteHotel)

module.exports = api