'use strict';

angular.module('app')
  .controller('UploadDemoCtrl', function ($scope) {
    $scope.fileUploadOptions = {
      url: '/upload',
      onSuccess: function (fileItem) {
        console.log('uploaded ' + fileItem.file.name);
      }
    };
  });
