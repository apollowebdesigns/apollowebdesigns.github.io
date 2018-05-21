(function() {
    angular
        .module('app')
        .controller('AppController', AppController);

    angular.$inject = ['informationService'];

    function AppController(informationService) {
        var vm = this;

        function getData() {
            return informationService.firebasePromise()
        }

        getData();
        
        vm.heading = 'Software developer, code enthusiast, blogger, tech lover';

    }
})();