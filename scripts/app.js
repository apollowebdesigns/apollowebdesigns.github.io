/**
 * Created by andrewevans on 01/12/2016.
 */
angular
    .module('app', []);


angular
    .module('app')
    .config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var mapState = {
    name: 'map',
    url: '/map',
    templateUrl: ''
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});