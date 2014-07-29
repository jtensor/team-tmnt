'use strict';

/**
 * @ngdoc function
 * @name tmntApp.controller:CharCtrl
 * @description
 * # CharCtrl
 * Controller of the tmntApp
 */
angular.module('tmntApp')
  .controller('CharCtrl', function ($scope, character) {
  	$scope.character = character;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
