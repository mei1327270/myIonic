angular.module('app')
  .controller('addGoodsController',function($scope,$state){
    $scope.goBack = function(){
      $state.go("query");
    }

  })
