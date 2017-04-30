/**
 * 
 */


var module = angular.module("customerServiceModule", []);

module.factory("loginService",
		function(){
	var messageCount=0;
	return {
		log:function(msg){
			console.log(messageCount++);
			console.log(msg);
		}
	}
	
});