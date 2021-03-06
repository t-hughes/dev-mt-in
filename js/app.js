var app = angular.module('socialInternApp', ['ui.router']);



app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider

    //#1 Initial Page
        .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
    })

    //#2 Landing Page(new users' profile page) - User is taken here when they submit the initial form on the Home page.
    .state('landing', {
            url: '/landing',
            templateUrl: 'views/landing.html'
        })
        //#3 Search for Friends - User can access this page only after they submit the initial form on the Home Page.
        .state('friend-search', {
            url: '/friend-search',
            templateUrl: 'views/friend-search.html',
            controller: 'friendSearchCtrl',
            resolve: {
                checkUser: function(mainSvrc, $state) {
                    return mainSvrc.checkForCurrentUser()
                        .then(function(response) {
                            return response;
                        }, function(err) {
                            swal('Oops!', 'Create a profile in order to find friends!', 'error');
                            $state.go('home');
                        });
                }
            }
        })
        //#4 Upadte Profile Information - User can access this as soon as they submit the initial form on the Home page.
        .state('update', {
            url: '/update',
            templateUrl: 'views/update.html',
        })
        //#5 Other users' profile page. User is taken here after clicking button on image overlay on the friend-search page.
        .state('friend-profile', {
            url: '/friend-profile/:id',
            templateUrl: 'views/friend-profile.html',
            controller: 'friendProfileCtrl'
        })
        //#6 New users' friends list. Only can access after they have added a friend.
        .state('friends', {
            url: '/friends',
            templateUrl: 'views/friends.html',
            controller: 'friendListCtrl'
        });
});
