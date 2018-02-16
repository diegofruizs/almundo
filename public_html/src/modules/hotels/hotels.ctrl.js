(function (ng) {
	var mod = ng.module("hotelModule");
	mod.constant("hotelContext", "api/hotel");
	mod.controller('hotelCtrl', ['$scope', '$http', 'hotelContext',
		function ($scope, $http, hotelContext) {

			$http.get(hotelContext).then(function(response){
				$scope.hotels = response.data;
			});

			$scope.range = function(n) {
				return new Array(n);
			};


		}
		]);
}
)(window.angular);