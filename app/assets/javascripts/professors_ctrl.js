(function() {
  "use strict";

  angular.module("app").controller("professorsCtrl", ['$scope', '$http', function($scope, $http){

    $scope.setupProfessorIndex = function(){
      $http.get("/professors.json").then(function(response){
        $scope.professors = response.data;
      });
      
      $http.get("/expertises.json").then(function(response){
        $scope.expertises = response.data;
      });  

    };

    window.scope = $scope;
  }]);

}());