whatson.controller('whatsonIndexController', ['$scope','$http','$interval', function($scope,$http,$interval){
    var alldata = [];
    
    $http({
        url: 'http://whatson.dev.opencity.io/whats-on',
        method: "GET"
    }).success(function (data){
        alldata = data;
        setTimeout(function(){
        $("#owl-demo").owlCarousel({
            items : 2,
            lazyLoad : true,
            navigation : true
          });
    },100);
    
    setTimeout(function(){
        $("#owl-other-demo").owlCarousel({
            items : 2,
            lazyLoad : true,
            navigation : true
          });
    },100);
    
    var startSecond = (alldata.length/2);
        
    $scope.firstRow=alldata.slice(0,startSecond);
    $scope.secondRow=alldata.slice(startSecond,alldata.length);
    }).error(function (data){
        alldata = false;
    });
        
    $scope.goToSection = function(value){        
        $scope.selectedEvent = value;
        //console.log(Date.today());
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yy = today.getFullYear()
        var day = value.date.split('-');
        
        if (dd===parseInt(day[2].split(' ')[0]) && mm===parseInt(day[1]) && yy===parseInt(day[0])){
            $scope.selectedEvent.date = 'TODAY';
        }
        
     };
    
    $scope.goBackEvents = function(){
        $scope.selectedEvent = undefined;
    };
    
    
    
    
    
    
    //$scope.dataFirstRow=JSON.parse(alldata.splice(0,2));
    //$scope.dataSecondRow=alldata.splice(2,4);
}]);
