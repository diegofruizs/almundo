'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HotelSchema = Schema(
{
	id: Number,
    name: String,
    stars: Number,
    price: { type: Number, default: 0},
    image: String,
    amenities: [{type: String}]
}
)

module.exports = mongoose.model('Hotel', HotelSchema)
