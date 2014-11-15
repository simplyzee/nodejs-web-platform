whatson.controller('whatsonIndexController', ['$scope', function($scope){
    //$http({
     //   url: 'http://whatson.dev.opencity.io/whatson',
      //  method: "POST"
    //}).success(function (data, status, headers, config) {
    //    console.log(data);return;
    //}).error(function (data, status, headers, config) {
    //    $scope.status = status;
    //});
    
    
    
    var alldata = [
        {id:1, title:'test', description:'description', category:'offers', date:'23/03/2014', venue:'here'},
        {id:2, title:'test2', description:'description2', category:'events', date:'03/07/2014', venue:'there'},
        {id:3, title:'test3', description:'description3', category:'news', date:'02/09/2014', venue:'farawway'},
        {id:4, title:'test4', description:'description4', category:'info', date:'04/07/2014', venue:'close'}
    ];
    
    $scope.firstRow=alldata.slice(0,2);
    $scope.secondRow=alldata.slice(2,4);
    $scope.custom = true;
    
    $scope.goToSection = function(value){
        $('.event-description').css('display','none');
        $('.event-info').css('display','none');
        $('.event-'+value).css('display','inline');
        
    };
    
    $scope.goBackEvents = function(){
        $('.event-description').css('display','none');
        $('.event-info').css('display','inline');
      
        
    };
    //$scope.dataFirstRow=JSON.parse(alldata.splice(0,2));
    //$scope.dataSecondRow=alldata.splice(2,4);
}]);