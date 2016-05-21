angular.module('app',['ionic','ui.router','ngCordova'])
.config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('login',{
            url:'/login',
            controller: 'loginController',
            templateUrl:'supnuevo/html/login.html'
        })
        $stateProvider.state('query',{
            url:'/query',
            controller: 'queryController',
            templateUrl:'supnuevo/html/query.html'
    })
    $stateProvider.state('addGoods',{
      url:'/addGoods',
      controller: 'addGoodsController',
      templateUrl:'supnuevo/html/addGoods.html'
    })
    $urlRouterProvider.otherwise('/login');
    })

