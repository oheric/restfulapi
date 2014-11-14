angular.module('myApp', ['ui.router', 'templates'])

.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'home.html',
		controller: 'homeController'
	})

	.state('planet', {
		url: '/planet',
		templateUrl: 'planet.html'
	});



})

.controller('homeController', function($scope, api) {
	$scope.test = "TESTESTEST";

	api.getPlanets()
	.then(function(data){
		console.log(data.data[0].image);
		$scope.image = data.data[0].image;
	});

})

.service('api', function($http){

	return {

		getPlanets: function(){

			var promise = $http.get('/api/planets')
			.then(function(response){
				return response;	
			})
			return promise;
		}
	}
});