(function() {
  'use strict';

  angular
    .module('app.mocks')
    .controller('MocksController', MocksController);

  MocksController.$inject = ['$location', 'authService', '$firebaseObject', 'FIREBASE_URL'];

  function MocksController($location, authService, $firebaseObject, FIREBASE_URL) {
    var vm = this;
    var ref = new Firebase(FIREBASE_URL+'/mocks');

    vm.error = null;

    vm.mocks = $firebaseObject(ref);

    vm.create = function() {
      console.info("creating new mock");
    };

  };

})();
