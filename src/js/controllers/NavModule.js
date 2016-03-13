/**
 * 菜单
 */
var app = angular.module("routerApp.navModule", [
					'routerApp.navService'
				]);
				
app.controller('navController',['$scope','$http', 'navListService', function($scope,$http,navListService){
    navListService.getDataNav().success(function(data){
    	$scope.navs = data.navs;
    }).error(function(data,status,headers,config){
		alert("服务无响应");
	});
}]);
