(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ngRoute',

      // Third party modules.
      'firebase',

      // Custom modules.
      'app.messages',
      'app.auth',
      'app.core'
    ])
    .config(configure)
    .run(runBlock);

  configure.$inject = ['$routeProvider', '$locationProvider'];

  function configure($routeProvider, $locationProvider) {

    //custom
    $routeProvider.when('/', {
      templateUrl: 'app/src/core/defaultHome.html'
    });

    //core
    //$locationProvider.html5Mode(true);
    $routeProvider.when('/notfound', {
      templateUrl: 'app/src/core/notfound.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/notfound'
    });
  }

  runBlock.$inject = ['$rootScope', '$location'];

  function runBlock($rootScope, $location ) {

    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") { console.error("app.runBlock# AUTH_REQUIRED");
        $location.path('/');
      }
    });


  }

})();
