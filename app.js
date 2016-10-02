angular.module('app', [['ngRoute']]);

angular.module('app').controller('HomeController', HomeController);

// HomeController.$inject = [];

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "main.htm"
  })
  .when("/red", {
    templateUrl : "red.htm"
  })
  .when("/green", {
    templateUrl : "green.htm"
  })
  .when("/blue", {
    templateUrl : "blue.htm"
  });
});


function HomeController() {
    var vm = this;
    vm.heading = "Apollo Web Designs";
}