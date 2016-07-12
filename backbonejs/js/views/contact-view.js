var app = app || {};

(function() {
    'use strict';

    app.ContactView = Backbone.View.extend({
        tagName: 'tr',

        initialize: function() {
        },

        render: function() {
            $(this.el).empty();

            $(this.el).append($('<td>' + this.model.get('name') + '</td>'));
            $(this.el).append($('<td>' + this.model.get('email') + '</td>'));
            $(this.el).append($('<td>' + this.model.get('phone') + '</td>'));
            $(this.el).append($('<td><a href="javascript:void(0)" class="edit">edit</a> | <a href="javascript:void(0)" class="delete">delete</a></td>'));

            return this;
        }
    });
})();