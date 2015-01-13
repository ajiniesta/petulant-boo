'use strict';

/**
 * @ngdoc function
 * @name petulantBooApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the petulantBooApp
 */
angular.module('petulantBooApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
