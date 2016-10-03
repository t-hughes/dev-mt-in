var app = angular.module('socialInternApp', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider

//#1 Initial Page
        .state('home', {
            url: '/',
            templateUrl: 'views/templates/home.html'
        })

//#2 Landing Page(new users' profile page) - User is taken here when they submit the initial form on the Home page.
        .state('landing', {
            url: '/landing',
            templateUrl: '/views/templates/landing.html'
        })
//#3 Search for Friends - User can access this page only after they submit the initial form on the Home Page.
        .state('friend-search', {
            url: '/friend-search',
            templateUrl: '/views/templates/friend-search.html',
            controller: 'friendSearchCtrl'
        })
//#4 Upadte Profile Information - User can access this as soon as they submit the initial form on the Home page.
        .state('update', {
            url: '/update',
            templateUrl: 'views/templates/update.html',
        })
//#5 Other users' profile page. User is taken here after clicking button on image overlay on the friend-search page.
        .state('friend-profile', {
          url: '/friend-profile/:id',
          templateUrl: 'views/templates/friend-profile.html',
          controller: 'friendProfileCtrl'
        })
//#6 New users' friends list. Only can access after they have added a friend.
        .state('friends', {
            url: '/friends',
            templateUrl: '/views/templates/friends.html',
        });
  });
