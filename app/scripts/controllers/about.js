'use strict';

var bagOfoodControllers = angular.module('bagOfoodControllers', []);

/**
 * @ngdoc function
 * @name bagOfoodApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bagOfoodApp
 */
bagOfoodControllers.controller('AboutCtrl', function ($scope) {
	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];
});