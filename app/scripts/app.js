'use strict';

angular.module('app', [
  'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute',
  'ui.bootstrap',
  'ui.fileUpload'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/upload-demo.html',
        controller: 'UploadDemoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
