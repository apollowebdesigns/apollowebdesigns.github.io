angular
    .module('app.controller', [])
    .controller('AppController', AppController);

AppController.$inject = ['$http', '$log', 'ledService', 'driveService'];

function AppController($http, $log, ledService, driveService) {
    var vm = this;

    /* get callbacks */
    getCallback ()
        .then(getSecondCallback()) 
        .then(console.log(vm.data));
    

    vm.requestedData = 'test data';
    vm.getData = ledService.getData;
    vm.driveForwards = driveService.driveForwards;
    vm.driveBackwards = driveService.driveBackwards;
    vm.driveData = driveService.driveData;
    vm.driveData = driveService.driveData;
    
    function activateLoop() {
        console.log(vm.data);
        for (var i = 0; i < vm.data.length; i++) {
            for (var j = 0; j < vm.data2.length; j++) {
                if (i === j) {
                    $log.info("new result");
                    $log.info(vm.data[i] + " and this one " + vm.data[j]);
                }
            }
        }
    }

    


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

    function getSecondCallback () {
        return $http({
            method: 'GET',
            url: 'test2.json'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $log.info("json response is");
            $log.info(response.data);
            vm.data2 = response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
}
