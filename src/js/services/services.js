/**
 * 导航数据
 */
var services = angular.module("routerApp.navService", []);

services.factory( 'navListService', ['$http', function($http) {
	var getNav = function(){
		return $http({
			method:"GET",
			url:"../src/data/nav.json"
		});
	};
	return {
		getDataNav: function (){
			return getNav();
		}
	};
}]);