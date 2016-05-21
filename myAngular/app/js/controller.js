angular.module('starter', [])
    .value("realName","nihao")
    .value("realName","hello")
    .constant("http","www.xxxx")
    .constant("http","www.baidu.com")
    //.factory("Data",function(){
    //    return{
    //        msg:"nihao",
    //        setMsg:function(){
    //            this.msg="hello";
    //        }
    //    }
    //
    //
    //})
    .controller("PhoneListCtrl",function($scope,realName,http){
        $scope.phones = [
            {"name": "Nexus S",
                "snippet": "Fast just got faster with Nexus S."},
            {"name": "Motorola XOOM? with Wi-Fi",
                "snippet": "The Next, Next Generation tablet."},
            {"name": "MOTOROLA XOOM?",
                "snippet": "The Next, Next Generation tablet."}
        ]
        $scope.realName = realName;
        $scope.http = http;
        $scope.Data = "";
        $scope.change=function(){
            if($scope.Data == "你好")
                $scope.Data = "你不好";
            else
                $scope.Data = "你好"
        }

    })
