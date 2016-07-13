var app = app || {};

window.template = function(id) {
    return _.template( $('#' + id).html() );
};

(function() {
    'use strict';

    app.ContactView = Backbone.View.extend({
        tagName: 'tr',
        template: template('contactTemplate'),

        events: {
            'click .edit': 'editContact',
            'click .delete': 'delContact'
        },

        initialize: function() {
            this.model.on('change', this.render, this);
            this.model.on('destroy', this.remove, this);
        },

        render: function() {
            // $(this.el).empty();

            // $(this.el).append($('<td>' + this.model.get('name') + '</td>'));
            // $(this.el).append($('<td>' + this.model.get('email') + '</td>'));
            // $(this.el).append($('<td>' + this.model.get('phone') + '</td>'));
            // $(this.el).append($('<td><a href="javascript:void(0)" class="edit">edit</a> | <a href="javascript:void(0)" class="delete">delete</a></td>'));

            // return this;

            this.$el.html( this.template(this.model.toJSON()) );
            return this;
        },

        editContact: function() {
            var newName = prompt("Please enter the new name", this.model.get('name'));
            if (!newName) return;
            this.model.set('name', newName);
        },

        delContact: function() {
            this.model.destroy(true);
        },

        remove: function() {
            this.$el.remove();
        }
    });
})();