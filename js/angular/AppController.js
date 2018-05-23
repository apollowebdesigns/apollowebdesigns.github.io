(function() {
    angular
        .module('app')
        .controller('AppController', AppController);

    angular.$inject = ['$log', 'informationService'];

    function AppController($log, informationService) {
        var vm = this;

        function getData() {
            return informationService.firebasePromise()
        }

        getData();
        
        vm.heading = 'Software developer, code enthusiast, blogger, tech lover';
        vm.analyticsEvent = analyticsEvent;

        function analyticsEvent(type) {
            $log.info('checking out data');
            ga('send', 'event', {
                eventCategory: 'Outbound Link',
                eventAction: 'click',
                eventLabel: event.target.href,
                transport: 'beacon'
              });
              $log.info('event sent');
        }
    }
})();