angular
    .module('app')
    .controller('AppController', AppController);

AppController.$inject = ['driveService'];

function AppController(driveService) {

    var vm = this;
    vm.requestedData = 'test data';
    vm.getData = driveService.getData;
    
}
