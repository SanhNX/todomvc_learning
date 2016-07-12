var module = angular.module('contactmvc', ['ngRoute'])
    .config(function($routeProvider) {
        'use strict';

        var routeConfig = {
            controller: 'ContactCtrl',
            templateUrl: 'contact-index.html'
        };

        $routeProvider
            .when('/', routeConfig)
            .when('/status', routeConfig)
            .otherwise({
                redirectTo: '/'
            });
    });