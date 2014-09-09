'use strict';

angular.module('app')
  .controller('UploadDemoCtrl', function ($scope, FileUploadModal) {
    $scope.alerts = [];

    $scope.fileUploadOptions = {
      url: '/upload',
      success: function (fileItem) {
        $scope.alerts.push({
          type: 'success',
          msg: '"' + fileItem.file.name + '" uploaded'
        });
      },
      error: function (fileItem) {
        $scope.alerts.push({
          type: 'danger',
          msg: '"' + fileItem.file.name + '" failed'
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
