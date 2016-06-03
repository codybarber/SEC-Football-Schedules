
var app = angular.module('my-app', ['ngRoute']);
app.config(function($routeProvider, $sceDelegateProvider) {
  $routeProvider
    .when('/', {
      controller: ('MainController'),
      templateUrl: 'teamList.html'
    })
    .when('/:name', {
      controller: 'TeamController',
      templateUrl: 'schedules.html'
    })

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/embed/**'
  ]);
});

app.controller('MainController', function($scope, $http) {
  $http.get('teams/teams.json')
    .success(function(teams) {
      $scope.teams = teams;
    });
});

app.controller('TeamController', function($scope, $http, $routeParams) {
  $http.get('teams/' + $routeParams.name + '.json')
    .success(function(data) {
      $scope.info = data;
    });
});
