/**
 * 
 */


var serviceModule=angular.module("serviceModule",[]);
serviceModule.factory("greetingService",function($http){
	var greetingObj={
			sayHI:function(){
				return 'HI,Good Morning';
			},
			sayHello:function(){
				return 'Hello,Good Morning';
			},
			getPromise:function(){
				var promise=$http.get("studentJSON.json");
				return promise;
			}
	};
	return greetingObj;
});



/*serviceModule.service("courseService",function($http){
	this.courseDetails=function(){
		var promise=$http.get("studentJSON.json");
	}
})*/