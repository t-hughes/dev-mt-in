angular.module('socialInternApp', ['ui.router'])
.config( function( $urlRouterProvider, $stateProvider ) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/views/home.html'
    })

    .state('landing', {
        url: '/landing',
        templateUrl: '/views/landing.html'
    })

    .state('friends', {
        url: '/friends',
        templateUrl: '/views/friends.html'
    })

    .state('friend-search', {
        url: '/friend-search',
        templateUrl: '/views/friend-search.html'
    })

    .state('friend-profile', {
        url: '/friend-profile',
        templateUrl: '/views/friend-profile.html'
    })

    .state('update', {
        url: '/update',
        templateUrl: '/views/update.html'
    });

});
