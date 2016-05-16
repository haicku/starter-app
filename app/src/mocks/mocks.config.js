(function() {
  'use strict';

  angular
    .module('app.mocks')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {

    $routeProvider.when('/mocks', {
      templateUrl: 'app/src/mocks/mocks.html',
      controller: 'MocksController',
      controllerAs: 'vm'
    });

  }

})();
