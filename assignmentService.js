var module = angular.module("employeeServiceModule", []);

module.service("employeeService", function() {
	this.insertEmployee = function(userObj) {
		var JSONUserObj = JSON.stringify(userObj);
		localStorage.setItem(userObj.uName, JSONUserObj);
	};
});

