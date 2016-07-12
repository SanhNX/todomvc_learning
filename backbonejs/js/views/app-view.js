var app = app || {};

(function() {
    'use strict';

    app.AppView = Backbone.View.extend({
        collection: null,
        el: 'tbody',

        events: {
            'click .edit': 'editContact',
            'click .delete': 'delContact'
        },

        initialize: function(options) {
        },

        render: function() {
            var element = $(this.el);
            var items = this.collection.length;

            element.empty();

            // Go through the collection items
            this.collection.forEach(function(item) {

                // Instantiate a PeopleItem view for each
                var contactView = new app.ContactView({
                    model: item
                });

                // Render the PeopleView, and append its element
                // to the table
                element.append(contactView.render().el);
            });

            return this;
        },

        editContact: function() {
            alert($(this));
        }
    });
})();