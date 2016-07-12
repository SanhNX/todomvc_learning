module.controller("ContactCtrl", function($scope, ContactFactory) {
    $scope.contacts = ContactFactory.list();

    $scope.saveContact = function() {
        ContactFactory.save($scope.newcontact);
        $scope.newcontact = {};
    }

    $scope.edit = function(id) {
        $scope.newcontact = angular.copy(ContactFactory.get(id));
    }

    $scope.delete = function(id) {
        ContactFactory.delete(id);
        if($scope.newcontact && $scope.newcontact.id == id) {
            $scope.newcontact = {};
        }
    }
})