'use strict';

/**
 * @ngdoc overview
 * @name tmntApp
 * @description
 * # tmntApp
 *
 * Main module of the application.
 */
var app = angular.module('tmntApp', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('main',{
		url:'/',
		templateUrl:'views/main.html',
		controller:'MainCtrl',
		resolve:{
			teams: function(turtleService){
				return turtleService.getTeams();
			}
		}
	})
	.state('team',{
		url:'/team/:teamId',
		templateUrl:'views/teamview.html',
		controller:'TeamctrlCtrl',
		resolve:{
			team: function($stateParams,turtleService){
				return turtleService.getTeam($stateParams.teamId);
			}
		}
	})
	.state('character',{
		url:'/character/:charId',
		templateUrl:'views/character.html',
		controller:'CharCtrl',
		resolve:{
			character: function($stateParams,turtleService){
				//debugger
				return turtleService.getCharacter($stateParams.charId);
			}
		}
	});
});