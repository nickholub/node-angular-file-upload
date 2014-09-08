'use strict';

angular.module('ui.fileUpload', ['angularFileUpload'])
  .directive('fileUpload', function (FileUploader, $timeout) {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'scripts/directives/file-upload/file-upload.html',
      scope: true,
      link: function (scope, element, attrs) {
        var options = scope.$eval(attrs.fileUpload);

        if (!options || !options.url) {
          throw 'Upload URL is not set';
        }

        var uploader = new FileUploader({
          url: options.url
        });
        scope.uploader = uploader;

        scope.uploading = false;

        angular.extend(uploader, {
          onAfterAddingFile: function () {
            scope.alert = null;
            scope.uploading = true;
            uploader.uploadAll();
          },
          onProgressAll: function (progress) {
            scope.progress = progress;
          },
          onSuccessItem: function (fileItem) {
            scope.uploading = false;

            scope.alert = {
              type: 'success',
              msg: 'File ' + fileItem.file.name + ' is successfully uploaded'
            };

            if (options.success) {
              options.success(fileItem);
            }
          },
          onErrorItem: function (fileItem, response, status) {
            console.log(fileItem);
            scope.uploading = false;

            scope.alert = {
              type: 'danger',
              msg: 'File ' + fileItem.file.name + ' upload failed',
              details: status + ' ' + response
            };
          }
        });

        scope.closeAlert = function () {
          scope.alert = null;
        };

        scope.selectFile = function () {
          $timeout(function () {
            element.find('input').trigger('click');
          }, 0);
        };
      }
    };
  });