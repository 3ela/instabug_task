angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/?filter',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
        params: {
          filter: {
            value: '',
            squash: true,
          },
        },
        reloadOnSearch: false,
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state({
        name: '404',
        url: '/404',
        template: '<v-404-page></v-404-page>',
      });

    $urlRouterProvider.otherwise('/404');
  });
