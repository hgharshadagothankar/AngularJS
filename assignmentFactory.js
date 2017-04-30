

var module = angular.module("employeeFactoryModule", []);




module.factory("employeeFactory", function() {
    var empObj={
   	 getEmpDetails:function(){
   		 var userObjArray = [];
   			for (var i = 0; i < localStorage.length; i++) {

   				var key = localStorage.key(i);
   				var JSONObj = localStorage.getItem(key);
   				console.log(JSONObj);
   				var JSObj = JSON.parse(JSONObj);
   				userObjArray.push(JSObj);
   			}
   			return userObjArray;

   	 }
    }
    return empObj;
});