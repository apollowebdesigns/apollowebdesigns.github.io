angular
    .module('app.ledService', [])
    .service('ledService', ledService);

ledService.$inject = ['$http', '$log'];

function ledService ($http, $log) {
    this.getData = _getData;
    var uniqueIP = "192.168.1.69", 
        uniqueIPparents = "192.168.1.74";

    function _getData() {
        $log.info("light function entered");
        $http.get("http://192.168.1.73/hits/blue")
        .then(function(response) {
            $log.info('data received');
            this.requestedData = response.data;
        });
    }
}