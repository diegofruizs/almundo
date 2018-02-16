'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public_html'));

app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});


app.use('/api',api)

module.exports = app