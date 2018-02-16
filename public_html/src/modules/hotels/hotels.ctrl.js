(function (ng) {
	var mod = ng.module("hotelModule");
	mod.constant("hotelContext", "api/hotel");
	mod.controller('hotelCtrl', ['$scope', '$http', 'hotelContext',
		function ($scope, $http, hotelContext) {

			$scope.show = false;

			$scope.getHotels = function(){
				$http.get(hotelContext).then(function(response){
					$scope.hotels = response.data;
				});	
			}

			$scope.searchHotel = function(search){

				$http.get(hotelContext, {params: {name: search}}).then(function(response){
					$scope.hotels = response.data;
					$scope.show = false;
					$scope.validateResults($scope.hotels);
				});


				if(search==''){
					$scope.getHotels()
				}
			}

			$scope.searchHotelWithStars = function(stars){

				$http.get(hotelContext, {params: {stars: stars}}).then(function(response){
					$scope.hotels = response.data;
					$scope.show = false;
					$scope.validateResults($scope.hotels);
					
				});

			}

			$scope.validateResults = function(hotels){
				if(hotels.length===0){
					$scope.show = true;
					$scope.message = "Lo sentimos no hemos encontrado resultados...";
				}
			}


			$scope.range = function(n) {
				return new Array(n);
			};

			$scope.getHotels();

		}
		]);
}
)(window.angular);