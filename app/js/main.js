(function() {
  'use strict';

  angular
    .module('GPA', ['ui.router']);

    (function() {
      'use strict';

      angular
        .module('GPA')
        .config(routerConfig);

      function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

          .state('home', {
            url: '/',
            templateUrl: 'views/home.html',


          })
          .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'

          })
          .state('services', {
            url: '/services',
            templateUrl: 'views/services.html'

          })
          .state('map', {
            url: '/map',
            templateUrl: 'views/map.html'

          })
          .state('forms', {
            url: '/forms',
            templateUrl: 'views/forms.html'

          })
          .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html'

          })
          .state('related', {
            url: '/related',
            templateUrl: 'views/related.html'

          });

        $urlRouterProvider.otherwise('/');
      }

    })();


})();
