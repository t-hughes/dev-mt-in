angular.module('socialInternApp', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'views/templates/home.html'
        })

        .state('landing', {
            url: '/landing',
            templateUrl: '/views/templates/landing.html'
        })

        .state('friends', {
            url: '/friends',
            templateUrl: '/views/templates/friends.html'
        })

        .state('friend-search', {
            url: '/friend-search',
            templateUrl: '/views/templates/friend-search.html'
        })

        .state('friend-profile', {
            url: '/friend-profile',
            templateUrl: '/views/templates/friend-profile.html'
        })

        .state('update', {
            url: '/update',
            templateUrl: 'views/templates/update.html',
        });
  });
