angular.module('todomvc', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        'use strict';

        var routeConfig = {
            controller: 'TodoCtrl',
            templateUrl: 'todomvc-index.html',
            resolve: {
                store: function(todoStorage) {
                    // Get the correct module (API or localStorage).
                    return todoStorage.then(function(module) {
                        module.get(); // Fetch the doto records in the background.
                        return module;
                    });
                }
            }
        };
    });