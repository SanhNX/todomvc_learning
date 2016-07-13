var app = app || {};

(function() {
    'use strict';

    app.Contact = Backbone.Model.extend({
        defaults: {
            id: 0,
            name: 'Sanh',
            email: 'sanhnx@yopmail.com',
            phone: '0938086255'
        },
        localStorage: new Backbone.LocalStorage("translations-db")
    });

})();