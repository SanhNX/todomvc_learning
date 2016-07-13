var app = app || {};

(function() {
    'use strict';

    app.AppView = Backbone.View.extend({
        el: 'tbody',
        type: 'localStorage',

        initialize: function() {
            this.collection.on('add', this.addOne, this);
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

        addOne: function(contact) {
            var contacts = new app.ContactView({ model: contact });
            this.$el.append(contacts.render().el);
        }
    });

    app.FormView = Backbone.View.extend({
        collection: null,
        el: '#todoapp',
        type: 'localStorage',

        events: {
            'click #saveContact': 'save'
        },

        initialize: function(options) {

        },

        save: function(contact) {
            // if(contact.id == null) {
            //     // add new
            //     contact.id = contacts.length + 1;
            //     contacts.push(contact);

            // } else {
            //     // update
            //     for(index in contacts) {
            //         if(contacts[index].id == contact.id) {
            //             contacts[index] = contact;
            //         }
            //     }
            // }

            var contact = new app.Contact({
                    id: this.collection.length+1,
                    name: this.$el.find('input[name=name]').val(),
                    email: this.$el.find('input[name=email]').val(),
                    phone: this.$el.find('input[name=phone]').val(),
                });
            // this.collection.add({model: contact});
            this.collection.add(contact);

            this.$el.find('.items').text(this.collection.length);
        }
    });
})();