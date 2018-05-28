(function() {
    angular
        .module('app')
        .service('informationService', informationService);

    angular.$inject = ['$http', '$log'];

    function informationService($http, $log) {
        this.firebasePromise = function() {
            return $http({
                method: 'GET',
                url: 'https://us-central1-userddata.cloudfunctions.net/helloWorld/second'
              }).then(function(response) {
                    $log.info('success');
                    $log.info(response);
                }).catch(function(response) {
                    $log.info('success');
                    $log.info(response);
                });
        }
        
    }
})();