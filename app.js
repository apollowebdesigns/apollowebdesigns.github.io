var app = angular.module('app', []);

app.controller('HomeController', HomeController);

// HomeController.$inject = [];

function HomeController() {
    var vm = this;
    vm.heading = "Apollo Web Designs";
}