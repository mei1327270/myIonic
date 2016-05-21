angular.module('app')
.controller('queryController',function($scope,$state){

    $scope.selectedCode = new Object();
    $scope.updatePrice = new Object();
    $scope.goods = {'codeName':''};
    $scope.queryGoodsCode = function(){
      var code = $scope.goods.codeName;
      if(code !== null && code !== undefined && code !== "" &&　code.length === 4){
        $scope.barCodes = [{value:1,label:'111',selected:true},
          {value:2,'label':'222'},
          {value:3,'label':'333'},
          {value:4,'label':'444'}
        ];
      }
    }
    $scope.func = function(selectedCode){
      console.log(selectedCode.value);
      $scope.selectedCodeInfo = {price1:'10',price2:'20',price3:'30',updatePrice:'40'};


    }
    $scope.getGoodInfo = function(){
     console.log("aa");
    }



    $scope.doAdd = function(barcode){
      $scope.goods.codeName = barcode;
    }
    $scope.doClearGoodCode = function(){
      $scope.selectedCodeInfo.updatePrice = "";
    }
    $scope.addGoods=function(){
      $state.go("addGoods");
    }
      $scope.addIVA = function(){
        var updatePrice = $scope.selectedCodeInfo.updatePrice;
        $scope.selectedCodeInfo.updatePrice=updatePrice*0.05;
      }
      $scope.addPercentage1=function(){

      }
      $scope.addPercentage2=function(){

      }
      $scope.zero=function(){

      }
      $scope.reduceIVA=function(){

      }
      $scope.reducePercentage1=function(){

      }
      $scope.reducePercentage2=function(){

      }
      $scope.zero1=function(){

      }




  })
