var app = app || {};

(function() {
    'use strict';

    var ContactRouter = Backbone.Router.extend({
        routes: {
            '': 'index' // At first we display the index route
        },

        index: function() {
            var contact = new app.Contacts([
                {
                    id: 0,
                    name: 'Sanh',
                    email: 'sanhnx@yopmail.com',
                    phone: '0938086255'
                },
                {
                    id: 1,
                    name: 'Tuan',
                    email: 'tuanhoang@yopmail.com',
                    phone: '0938086255'
                }
                ]);

            var AppView = new app.AppView({
                collection: contact
            });

            AppView.render();
        }
    });

    app.ContactRouter = new ContactRouter();
    Backbone.history.start();
})();