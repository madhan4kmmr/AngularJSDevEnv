/*#######################################################################
    By : Madhan Mohan K
  Version : 1.8
  #######################################################################*/

var app = angular.module("easyroomApp", ['ngDialog']);


//This configures path for a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
    	.when('/needRoom',
            {
                controller: 'roomSearchController',
                templateUrl: 'app/partials/needRoom.html'
            })
        .when('/haveRoom',
            {
                controller: 'RoomController',
                templateUrl: 'app/partials/haveRoom.html'
            })
        .when('/admin',
            {
        	controller: 'AdminController',
        	templateUrl: 'app/partials/Admin.html'
            })
        .otherwise({ redirectTo: '/needRoom' });
});



