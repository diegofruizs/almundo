'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db,(err,res) =>{
if(err){
	return console.log(`Error conectando bd.... ${err}`)
}

console.log('Connnection to DB OK')

app.listen(config.port, ()=> {
	console.log(`API RESTful running at ${config.port}`);
}) 

})
