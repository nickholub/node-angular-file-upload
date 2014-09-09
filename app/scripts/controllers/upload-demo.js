'use strict';

angular.module('app')
  .controller('UploadDemoCtrl', function ($scope, FileUploadModal) {
    $scope.alerts = [];

    $scope.fileUploadOptions = {
      url: '/upload',
      success: function (fileItem) {
        $scope.alerts.push({
          type: 'success',
          msg: 'uploaded ' + fileItem.file.name
        });
      },
      error: function (fileItem) {
        $scope.alerts.push({
          type: 'danger',
          msg: 'failed ' + fileItem.file.name
        });
      }
    };

    $scope.open = function () {
      var modal = new FileUploadModal($scope.fileUploadOptions);
      modal.open();
    };

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };
  });
