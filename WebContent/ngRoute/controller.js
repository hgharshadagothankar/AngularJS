/**
 * 
 */
(function(){
var module=angular.module("routeApp");
module.controller("PageController1",function($scope){
	console.log("Page Controller 1");
	$scope.content=["ramesh","suresh","dinesh"];
});
module.controller("PageController2",function($scope,$routeParams){
	console.log("Page Controller 2");

	$scope.content=["rakesh","harsada","keerthana"];
});
module.controller("PageController3",function($scope,$routeParams){
	console.log("Page Controller 3");
	$scope.data=$routeParams.name;
	//$scope.data=$routeParams.name;
});

})();