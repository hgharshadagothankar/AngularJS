/**
 * 
 */


var module=angular.module("courseModule", []);

module.service("courseRegistrationService",function(){
	this.insertEmployee=function(courseObj){
		var JSONOBJ=JSON.stringify(courseObj);
		localStorage.setItem(courseObj.courseName,JSONOBJ);
	}
});




module.factory("courseDetailsService", function() {
	var getcourse={
			getCourseDetails:function(){
				var courseDetails = [];

				for (var i = 0; i < localStorage.length; i++) {

					var key = localStorage.key(i);
					console.log(key);
					var JSONObj = localStorage.getItem(key);
					console.log(JSONObj);

					var JSObj = JSON.parse(JSONObj);
					courseDetails.push(JSObj);
				}
				return courseDetails;

			}
	}
	return getcourse;
});


