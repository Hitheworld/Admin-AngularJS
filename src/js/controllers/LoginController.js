/**
 * 登录  --- 表单检验
 */
var app = angular.module("routerApp.loginModule", [
					
				]);
				
app.controller('LoginController',['$scope','$location', function($scope,$location){
    $scope.user = {
        userName:'name',
        password:'123'
    };
    $scope.save = function(){
        alert("保存数据!");
        $location.url('index');
//		console.log($scope.user);
    }
}]);
