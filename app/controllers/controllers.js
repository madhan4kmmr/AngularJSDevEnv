/*#######################################################################
  
  By : Madhan Mohan K
  Version : 1.8
  #######################################################################*/



app.controller('RoomController', function ($scope,$http, easyroomsService) {

	// Call init to load every thing
    init();
    
    
    function init() {
    	
    	 console.log("init RoomController...");
    	 
    	//http request to get Cities and roomtypes and room informaion
    	$http.get('roomInfo.json').
        //$http.get('https://raw.githubusercontent.com/madhan4kmmr/AngularJSDevEnv/master/JSONfiles/roomInfo.json').
        success(function(data, status, headers, config) {
        	$scope.chooseCities = data.cities;
        	$scope.totalRooms = data.totalRooms;
            $scope.roomTypes = data.roomTypes;
        }).
        error(function(data, status, headers, config) {
        	alert("error, please check... json data not received");
        });
    }
    
    
     $scope.submitRoomInformation = function() {
        console.log("posting data....");
        formData = $scope.roomInfo;
    };
});


app.controller('roomSearchController', function ($scope, $rootScope, $http , ngDialog, roomSearchService) {

    // Call init to load every thing
    init();

    function init() {
        
    	 console.log("init roomSearchController...");
    	 
    	//http request to get list of rooms
        $http.get('easyRooms.json').
        //$http.get('https://raw.githubusercontent.com/madhan4kmmr/AngularJSDevEnv/master/JSONfiles/easyRooms.json').
        success(function(data, status, headers, config) {
        	$scope.sharingRooms = data;
        }).
        error(function(data, status, headers, config) {
        	alert("error, please check... json data not received");
        });
        
  }
    
    // open room information when user click on Viewinfo
    $scope.openRoomInformation = function (choosenRoomId) {
    	console.log("inside openDefault...");
    	 
    	//check selected room is in the list or not
    	for(var i=0; i < $scope.sharingRooms.length; i++){
    		var roomId = $scope.sharingRooms[i].id;
    		if(choosenRoomId == roomId)
    			{
	    			$scope.windowTitle=$scope.sharingRooms[i].title;
	    			$scope.windowDiscription=$scope.sharingRooms[i].description;
	    			$scope.windowNoOfrooms=$scope.sharingRooms[i].noofrooms;
	    			$scope.windowRoomType=$scope.sharingRooms[i].roomType;
	    			$scope.windowAvldate=$scope.sharingRooms[i].avldate;
	    			$scope.windowCost=$scope.sharingRooms[i].cost;
	    			$scope.windowCity=$scope.sharingRooms[i].city;
	    			$scope.windowCountry=$scope.sharingRooms[i].country;
	    			$scope.windowAddress=$scope.sharingRooms[i].address;
	    			break;
    			}
    	}
    	
    	
    	//trigger Dialog open
        ngDialog.open({
        	
        			template: '<div class="ngdialog-message">' +
	            	  '<div class="sripback text-left">' +
	            	  			'<div class="windowRoomheader">Room Information....</div>' +
	            	            '<div class="windowtitle ">'+$scope.windowTitle+'</div>' +
	            	            '<div class="windowdiscription text-justify">'+$scope.windowDiscription+'</div>' +
	            	            '<div class="windowRoominfo">' +
	            	            	
	            	            	'<table class="table table-striped table-bordered table-condensed table-hover windowtable">' +
	            	    				'<tr><td><div>Total Rooms:</div></td><td><span>'+$scope.windowNoOfrooms+'</span></td></tr>' +
	            	    				'<tr><td><div>Room Type:</div></td><td><span>'+$scope.windowRoomType+'</span></td></tr>' +
	            	    				'<tr><td><div>Available From:</div></td><td><span>'+$scope.windowAvldate+'</span></td></tr>' +
	            	    				'<tr><td><div>Est.Cost.per week ($):</div></td><td><span>'+$scope.windowCost+'</span></td></tr>' +
	            	    				'<tr><td><div>Country:</div></td><td><span>'+$scope.windowCountry+'</span></td></tr>' +
	            	    				'<tr><td><div>City:</div></td><td><span>'+$scope.windowCity+'</span></td></tr>' +
	            	    				'<tr><td><div>Address:</div></td><td><span>'+$scope.windowAddress+'</span></td></tr>' +
	            	    			'</table>' +
	            	             '</div>' +
	            				 '<br/>' +
	            				'<p class="text-right"><button type="submit" class="btn btn-danger btnresizeToicon" data-ng-click="closeThisDialog()"><i class="glyphicon glyphicon-remove-circle"></i>&nbsp;&nbsp;Close</button></p>' +
	            	'</div>' +
	            	'</div>',
	            	 plain: true
	            	 //controller: 'roominfoDisplyController',
	            	 //data: { foo: 'from a service' }
	            	 //disableAnimation: true, //WithoutAnimation
	            	 // controllerAs: 'ctrl', //openControllerAsController
	            	 //className: 'ngdialog-theme-plain custom-width', // custom width
	            	 //closeByDocument: false,
	            	 //closeByEscape: false,
	            	 // className: 'ngdialog-theme-default',
	            	 // scope: $scope
        });
       
    };
    
});


app.controller('AdminController', function ($scope,easyroomsAdminService) {
	
	init();

    function init() {
        
    	 console.log("init AdminController...");
    	 
      }
	
});



