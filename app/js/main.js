(function() {
  'use strict';

  angular
    .module('GPA', ['ui.router'])
    .run(["$rootScope", "$anchorScroll",
    function ($rootScope, $anchorScroll) {
      $rootScope.$on("$locationChangeSuccess",
        function() {
          $anchorScroll();
      });
    }])
  ;


    (function() {
      'use strict';

      angular
        .module('GPA')
        .config(routerConfig);


      function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('app', {
          abstract: true,
          views: {
            'content@': {
              controller: 'appCtrl',
              controllerAs: 'appC'
            },
            'top@': {
              templateUrl: 'views/top.html'
            }
          }
        })

          .state('home', {
            parent:'app',
            url: '/',
            views:{
              'content@': {
                templateUrl: 'views/home.html',
              }
            }



          })
          .state('about', {
            parent:'app',
            url: '/about',
            views:{
              'content@': {
                templateUrl: 'views/about.html'
              }
            }


          })
          .state('services', {
            parent:'app',
            url: '/services',
            views:{
              'content@': {
                templateUrl: 'views/services.html'
              }
            }


          })
          .state('map', {
            parent:'app',
            url: '/map',
            views:{
              'content@': {
                templateUrl: 'views/map.html'
              }
            }


          })
          .state('forms', {
            parent:'app',
            url: '/forms',
            views:{
              'content@': {
                templateUrl: 'views/forms.html'
              }
            }


          })
          .state('contact', {
            parent:'app',
            url: '/contact',
            views:{
              'content@': {
                templateUrl: 'views/contact.html'
              }
            }


          })
          .state('related', {
            parent:'app',
            url: '/related',
            views:{
              'content@': {
                templateUrl: 'views/related.html'
              }
            }


          })
          .state('doc', {
            parent:'app',
            url: '/docnstaff',
            views:{
              'content@': {
                templateUrl: 'views/docnstaff.html'
              }
            }


          })
          .state('products', {
            parent:'app',
            url: '/products',
            views:{
              'content@': {
                templateUrl: 'views/products.html'
              }
            }


          })
          .state('thanks', {
            parent:'app',
            url: '/thankyou',
            views: {
              'content@':{
                templateUrl: 'views/thankyou.html'
              }
            }
          });

        $urlRouterProvider.otherwise('/');
      }

    })();


})();
