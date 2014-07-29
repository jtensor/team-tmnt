'use strict';

/**
 * @ngdoc function
 * @name tmntApp.controller:TeamctrlCtrl
 * @description
 * # TeamctrlCtrl
 * Controller of the tmntApp
 */
angular.module('tmntApp')
  .controller('TeamctrlCtrl', function ($scope, team) {
  	$scope.team=team;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
