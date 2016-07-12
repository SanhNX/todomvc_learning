var app = app || {};

(function() {
    'use strict';

    app.Contact = Backbone.Model.extend({
        // Example of how to do a validation in a model
        validate: function(attributes) {
            if (typeof attributes.firstname !== 'string') {
                // Return a failed validation
                return 'Firstname is mandatory';
            }
            if (typeof attributes.lastname !== 'string') {
                // Return a failed validation
                return 'Lastname is mandatory';
            }
            // All validations passed, don't return anything
        }
    });

})();