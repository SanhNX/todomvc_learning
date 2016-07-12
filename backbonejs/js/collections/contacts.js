var app = app || {};

(function() {
    'use strict';

    app.Contacts = Backbone.Collection.extend({
        model: app.Contact
    });
})();