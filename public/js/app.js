var arkApp = angular.module('ArkApp', ['ngRoute']);

arkApp.config(function($routeProvider) {
  $routeProvider
  // going to route '/' and getting template for home page using HomeController
  .when('/', {
    templateUrl : 'pages/home.ejs',
    controller : 'HomeController as home'
  });

  $routeProvider.when('/donate', {
    templateUrl : 'pages/donate.ejs',
    controller : 'DonateController as donate'
  });

  $routeProvider.when('/impact', {
    templateUrl : 'pages/impact.ejs',
    controller : 'ImpactController as impact'
  });

  $routeProvider.when('/FEED', {
    templateUrl : 'pages/feeding.ejs',
    controller : 'FeedingController as feed'
  });

  $routeProvider.when('/comming_soon', {
    templateUrl : 'pages/comming_soon.ejs',
    controller : 'CommingController as comming'
  });

});