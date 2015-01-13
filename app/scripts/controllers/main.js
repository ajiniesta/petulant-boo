'use strict';

/**
 * @ngdoc function
 * @name petulantBooApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the petulantBooApp
 */
angular.module('petulantBooApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
