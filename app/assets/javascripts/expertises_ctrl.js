(function() {
  "use strict";

  angular.module("app").controller("expertisesCtrl", ['$scope', '$http', function($scope, $http){

    $scope.setupExpertiseIndex = function(){
      $http.get("/expertises.json").then(function(response){
        $scope.expertises = response.data;
        $scope.results = $scope.expertises;
        $scope.generateList = function(){
          if($scope.selectedList.length === 0){
            return $scope.results;
          } else {
            $scope.results = $scope.selectedList;
            return $scope.selectedList;
          }
        };
      }); 
    };

    window.scope = $scope;
  }]);

}());