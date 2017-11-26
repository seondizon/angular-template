var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: './components/home.html',
		controller: 'homeCtrl'
	}).when('/about', {
		templateUrl: './components/about.html',
		controller: 'aboutCtrl'
	}).otherwise({
		template: '404'
	});

	// for cleanURL
	// $locationProvider.html5Mode(true);
});

app.controller('homeCtrl', function($scope){
	//You know nothing Jon Snow
});

app.controller('aboutCtrl', function($scope){
	//You know nothing Jon Snow
});

/* Just some codes
app.service('user', function() {
	var username;
	var loggedin = false;
	var id;

	this.getName = function() {
		return username;
	};

	this.setID = function(userID) {
		id = userID;
	};
	this.getID = function() {
		return id;
	};

	this.isUserLoggedIn = function() {
		if(!!localStorage.getItem('login')) {
			loggedin = true;
			var data = JSON.parse(localStorage.getItem('login'));
			username = data.username;
			id = data.id;
		}
		return loggedin;
	};

	this.saveData = function(data) {
		username = data.user;
		id = data.id;
		loggedin = true;
		localStorage.setItem('login', JSON.stringify({
			username: username,
			id: id
		}));
	};

	this.clearData = function() {
		localStorage.removeItem('login');
		username = "";
		id = "";
		loggedin = false;
	}
})

app.controller('homeCtrl', function($scope, $location) {
	$scope.goToLogin = function() {
		$location.path('/login');
	};
	$scope.regiser = function() {
		$location.path('/register');
	}
});

app.controller('loginCtrl', function($scope, $http, $location, user) {
	$scope.login = function() {
		var username = $scope.username;
		var password = $scope.password;
		$http({
			url: 'http://localhost/angularjs-mysql/server.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: 'username='+username+'&password='+password
		}).then(function(response) {
			if(response.data.status == 'loggedin') {
				user.saveData(response.data);
				$location.path('/dashboard');
			} else {
				alert('invalid login');
			}
		})
	}
});

app.controller('dashboardCtrl', function($scope, user, $http) {
	$scope.user = user.getName();
	
	$scope.newPass = function() {
		var password = $scope.newpassword;
		$http({
			url: 'http://localhost/angularjs-mysql/updatePass.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: 'newPass='+password+'&id='+user.getID()
		}).then(function(response) {
			if(response.data.status == 'done') {
				alert('Password updated');
			} else {
				alert('CSRF maybe?');
			}
		})
	};
});

pwmanger

var app = angular.module('myPassMngr', ['ng-clipboard']);

app.controller('pwListController', function($scope, pwFactory){

	
	$scope.accounts;
	$scope.pwSearch = '';

	pwFactory.getPws()
	.then(function(response){
		$scope.accounts = response.data;
	});
		
});



app.factory('pwFactory', function($http) {

	function getPws() {
		return $http.get('data.json');
	}

	return {
		getPws: getPws
	}

});

*/