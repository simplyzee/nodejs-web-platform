polls.controller('pollsIndexController', ['$scope', '$http', '$location', function($scope, $http){
    $scope.polldataurl = 'http://nodejs-citizenvote-platofrm.dev.opencity.io/';

//    $http.get('http://nodejs-citizenvote-platofrm.dev.opencity.io').success(function(data) {
        $scope.poll = {"id":1,"name":"If we had to implment cuts, would you prefer to cut either refuse collection or street lighting","options":{"1":"Refuse Collection","2":"Street Lighting"},"results":{"1":"3003","2":"1931"}};
//    });



    $scope.sendPollData = function(pollId, pollChoiceId) {
        // URL of the API to receive the poll data
        var pollPostUrl = '/posturl';
        var pollData = {
            // ID of the poll
            pollId: pollId,
            // Id of the choice value
            pollChoiceId:pollChoiceId
        }

        // COMMENT THIS BIT OUT AND UNCOMMENT THE BELOW WHEN READY
        window.location = '/#/polls/voted';


//        $http.post(pollPostUrl, pollData).success(function(data, status, headers, config){
//            console.log('post success');
//            console.log('data');
//            console.log(data);
//
//            window.location = '/#/polls/voted';
//
//        }).error(function(data, status, headers, config){
//            console.log('post failure');
//            console.log('data');
//            console.log(data);
//        });
    }

    $scope.pollResultsHeight = function(results, voteKey){
//        results = {1: "3003", 2: "1931"}
        var mostVotes = 0;

        for (var key in results) {
            var voteCount = results[key];
            if (voteCount > mostVotes) {
                mostVotes = voteCount;
            }
        }

        var height = (results[voteKey]/mostVotes)*100;

        return {height: height+"%"};
    }
}]);