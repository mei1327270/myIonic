angular.module('app',[])
    .controller('MyCtrl',function($scope,$http){

        $scope.name="aa";
        $scope.add = function(){
            $http({
                method:"post",
                contentType:"application/x-www-form-urlencoded; charset=utf-8",
                url:"struts2/emp-list?name=你好",
                success:function(data){
                    console.log(data);
                }
            })

        }
    })
	 .directive("food",function(){
        return  {
            restrict:'E',
            controller:function($scope){
            $scope.foods = [];
                this.addApple = function(){
                    $scope.foods.push('apple');
                }
                this.addOrange = function(){
                    $scope.foods.push('orange');
                }
                this.addBanana = function(){
                    $scope.foods.push('banana');
                }
            },
            link:function(scope,element){
                element.bind("mouseenter",function(){
                    console.log(scope.foods);
                })
            }

        }
    })
    .directive("apple",function(){
        return {
            require:'food',
            link:function(scope,element,attrs,foodCtrl){
                foodCtrl.addApple();
            }
        }
    })
    .directive("orange",function(){
        return {
            require:'food',
            link:function(scope,element,attrs,foodCtrl){
                foodCtrl.addOrange();
            }
        }
    })
    .directive("banana",function(){
        return {
            require:'food',
            link:function(scope,element,attrs,foodCtrl){
                foodCtrl.addBanana();
            }
        }
    })