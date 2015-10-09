'use strict';

angular.module('users').controller('AuthenticationController',
  ['$scope', '$http', '$location', 'Authentication', '$modal','$state',
    function ($scope, $http, $location, Authentication, $modal,$state) {
      $scope.authentication = Authentication;

      // If user is signed in then redirect back home
      if ($scope.authentication.user) $location.path('/');

      $scope.credentials = {
        userType: 'promoter'
      };

      $scope.signup = function () {
        $http.post('/auth/signup', $scope.credentials).success(function (response) {
          // If successful we assign the response to the global user model
          $scope.authentication.user = response;

          // And redirect to the index page
          $location.path('/');
        }).error(function (response) {
          $scope.error = response.message;
        });
      };

      $scope.showTakanon = function () {

        var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'modules/users/views/authentication/takanon.html',
          //controller: 'ModalInstanceCtrl',
          size: 'lg'

        });
      };

      $scope.signin = function () {
        $http.post('/auth/signin', $scope.credentials).success(function (response) {
          // If successful we assign the response to the global user model
          $scope.authentication.user = response;

          // And redirect to the index page
          $location.path('/');
        }).error(function (response) {
          $scope.error = response.message;
        });
      };
    }
  ]);
