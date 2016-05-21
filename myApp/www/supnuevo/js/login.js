angular.module('app')
.controller('loginController',function($scope,$state,$ionicLoading,$http,$cordovaProgress,$cordovaCamera){
    $scope.user = [{
      'username':'',
      'password':'',
    }];

    $scope.username=new Object();
    $scope.password= new Object();
    $scope.change = function(){
      console.log($scope.user.username);
    }
    $scope.doClear1 = function(){
      var username = $scope.user.username;
      if(username !== null && username !== undefined && username !== "")
        $scope.user.username="";
    }
    $scope.doClear2 = function(){
      var password = $scope.user.password;
      if(password !== null && password !== undefined && password !== "")
        $scope.user.password="";
    }
    $scope.goQuery = function(){
     // $state.go("query");
      var user = $scope.user;
      $cordovaProgress.showSimple(true);
      //$ionicLoading.show({
      //  template:'<ion-spinner icon="ios"></ion-spinner>',
      //});
      $http({

        method:"post",
        data:{
          username:user.username,
          password:user.password
        },
        url:"http://211.87.225.210:8080/ReactJPChatter/authentic/authenticUserWithApp.do",
        success:function(response){
          $state.go("/query");

          alert(response.data);
          $ionicLoading.hide();
        },
        error:function(err){
          alert(err.toSource());
          $ionicLoading.show({
            template:'could not connect the server',
            duration:'2000'
          });
        },
        timeout:'3000'
      })
    }
  $scope.doPhoto = function(){
      var options = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
      };

      $cordovaCamera.getPicture(options).then(function(imageURI) {
        $scope.imageSrc= imageURI;
      }, function(err) {
        // error
      });
  }
  })
