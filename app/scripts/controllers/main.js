'use strict';

/**
 * @ngdoc function
 * @name tmntApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tmntApp
 */
angular.module('tmntApp')
  .controller('MainCtrl', function ($scope, teams) {
  	$scope.teams = teams;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
