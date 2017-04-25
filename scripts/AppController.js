angular
    .module('app.controller', [])
    .controller('AppController', AppController);

AppController.$inject = ['$http', '$log', 'ledService', 'driveService'];

function AppController($http, $log, ledService, driveService) {
    var vm = this;
    vm.requestedData = 'test data';
    vm.getData = ledService.getData;
    vm.driveForwards = driveService.driveForwards;
    vm.driveBackwards = driveService.driveBackwards;
    vm.driveData = driveService.driveData;
    vm.driveData = driveService.driveData;
    getCallback (); 


    //http test

    function getCallback () {
        return $http({
            method: 'GET',
            url: 'test.json'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $log.info("json response is");
            $log.info(response.data);
            vm.data = response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
}
