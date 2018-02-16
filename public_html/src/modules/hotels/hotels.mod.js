(function (ng) {
    
    var mod = ng.module("hotelModule", ['ui.router']);
    
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            
            var basePath = 'src/modules/hotels/';
            
            $urlRouterProvider.otherwise("/");
            
            $stateProvider.state('hotelsList', {
                
                url: '/',
                 views: {
                    'mainView': {
                        templateUrl: basePath + 'hotels.list.html',
                        controller: 'hotelCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            });
        }
    ]);
})(window.angular);
