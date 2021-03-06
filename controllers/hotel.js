'use strict'

const Hotel = require('../models/hotel')

function getHotel(req, res){

	let hotelId = req.params.hotelId

	Hotel.findById(hotelId,(err,hotel) => {
		if(err) return res.status(500).send({message: 'Error al realizar la petición'})
			if(!hotel) return res.status(404).send({message: 'El hotel con ese id no existe'})

				res.status(200).send(hotel)	
		})

}

function getHotels(req,res){

	if(!isEmpty(req.query)){

		if(req.query.name){
			var name = req.query.name;

			Hotel.find({'name' : new RegExp(name, 'i')}, function(err, hotels){
				if(err) return res.status(500).send({message: 'Error al realizar el filtro de los hoteles por nombre'})
				
				if(!hotels) return res.status(404).send({message: 'No hay resultados para su búsqueda por nombre'})
				
				res.status(200).send(hotels)	

				});	
		}
		if(req.query.stars){
			var stars = req.query.stars;

			Hotel.find({'stars' : stars}, function(err, hotels){
				if(err) return res.status(500).send({message: 'Error al realizar el filtro de los hoteles por estrellas'})
				
				if(!hotels) return res.status(404).send({message: 'No hay resultados para su búsqueda por estrellas'})
				
				res.status(200).send(hotels)	

				});	

		}

	}else{

	Hotel.find({},(err,hotels)=>{
		if(err) return res.status(500).send({message: 'Error al realizar la petición de consultar los hoteles'})
		
		if(!hotels) return res.status(404).send({message: 'No hay hoteles disponibles '})
		
		res.status(200).send(hotels)	


		})
	}
}

function saveHotel(req,res){
	console.log('POST /api/hotel')
	for(var key in req.body) {
		if(req.body.hasOwnProperty(key)){

			console.log(req.body[key]);


		}
	}

	let hotel = new Hotel()
	hotel.id = req.body.id
	hotel.name= req.body.name
	hotel.stars = req.body.stars
	hotel.price = req.body.price
	hotel.image= req.body.image
	hotel.amenities = req.body.amenities


	hotel.save((err, hotelStored) =>{
		if(err){
			res.status(500).send({message: `Error guardando... ${err}`})
		}
		res.status(200).send({hotel: hotelStored})	
	})




}

function updateHotel(req, res){


	let hotelId = req.params.hotelId
	let update = req.body

	Hotel.findByIdAndUpdate(hotelId, {$set:update}, (err,hotelUpdated) =>{
		if(err) res.status(500).send({message: `Error actualizando el hotel... ${err}`})

			res.status(200).send({hotel: hotelUpdated})

	})	

}

function deleteHotel(req, res){

	let hotelId = req.params.hotelId

	Hotel.findById(hotelId, (err,hotel) =>{

		if(err) res.status(500).send({message: `Error borrando el hotel... ${err}`})
			hotel.remove(err=>{
				if(err) res.status(500).send({message: `Error borrando el hotel... ${err}`})
					res.status(200).send({message: 'Hotel borrado...'})	
			})	


	})


}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

module.exports = {
	getHotel,
	getHotels,
	updateHotel,
	deleteHotel,
	saveHotel

}