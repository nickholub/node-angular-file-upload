'use strict';

angular.module('app')
  .controller('UploadDemoCtrl', function ($scope) {
    $scope.fileUploadOptions = {
      url: '/upload',
      success: function (fileItem) {
        console.log('uploaded ' + fileItem.file.name);
      },
      error: function (fileItem) {
        console.log('failed ' + fileItem.file.name);
      }
    };
  });
