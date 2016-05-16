(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ngRoute',

      // Third party modules.
      'firebase',

      // Custom modules.
      'app.auth',
      'app.core'
    ])
    .config(configure)
    .run(runBlock);

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }

  runBlock.$inject = ['$rootScope', '$location'];

  function runBlock($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") {
        $location.path('/');
      }
    });
  }

})();
