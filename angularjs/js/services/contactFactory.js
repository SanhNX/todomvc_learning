module.factory('ContactFactory', function() {
    var factory = {};
    var contacts = [{
                    id: 0,
                    name: 'Sanh',
                    email: 'sanhnx@yopmail.com',
                    phone: '0938086255'
                }];

    factory.save = function(contact) {
        if(contact.id == null) {
            // add new
            contact.id = contacts.length + 1;
            contacts.push(contact);

        } else {
            // update
            for(index in contacts) {
                if(contacts[index].id == contact.id) {
                    contacts[index] = contact;
                }
            }
        }
    };

    factory.get = function(id) {
        for(index in contacts) {
            if(contacts[index].id == id) {
                return contacts[index];
            }
        }
    }

    factory.delete = function(id) {
        for(index in contacts) {
            if(contacts[index].id == id) {
                contacts.splice(index, 1);
            }
        }
    };

    factory.list = function() {
        return contacts;
    };

    return factory;
})