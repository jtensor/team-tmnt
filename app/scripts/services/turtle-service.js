'use strict';

/**
 * @ngdoc service
 * @name tmntApp.turtleService
 * @description
 * # turtleService
 * Service in the tmntApp.
 */
angular.module('tmntApp')
  .service('turtleService', function($http, $q) {
    this.getTeams=function(){
    	var deferred=$q.defer();
    	$http({
    		method:'GET',
    		url: 'http://tmnt.devmounta.in/team',
    	}).success(function(data){
    		deferred.resolve(data);
    	});
    	return deferred.promise;
    };
    this.getTeam=function(teamId){
    	var deferred=$q.defer();
    	$http({
    		method:'GET',
    		url: 'http://tmnt.devmounta.in/team/'+teamId,
    	}).success(function(data){
    		console.log(data[0].characters);
    		deferred.resolve(data[0].characters);
    	});
    	return deferred.promise;
    };
    this.getCharacter=function(charId){
    	var deferred = $q.defer();
    	$http({
    		method:'GET',
    		url:'http://tmnt.devmounta.in/character/'+charId,
    	}).success(function(data){
    		console.log('hii');
    		console.log(data.id);
    		deferred.resolve(data.id);
    	});
    	return deferred.promise;
    };
  });
