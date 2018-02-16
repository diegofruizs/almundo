(function (ng) {
    var app = angular.module('mainApp', [
        'ui.router',
        'ui.bootstrap',
        'hotelModule'

    ]);
    app.config(['$qProvider', function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }]);
})(window.angular);
