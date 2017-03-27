myApp.controller('searchController', ['$scope', '$http', '$state', 'storeService', 'flashService', function($scope, $http, $state, storeService, flashService){

  
  $scope.regex = /(.jpe?g|.png)$/;

  
  $scope.submit = function(){
    // Submit type url    
    if($scope.searchForm.$valid){
      storeService.postUrl($scope.myUrl).then(
        function(data){
          flashService.printMessage('success', 'image envoyée');
          $state.go('home.result');
        },
        function(error){
          console.log(error);
        }
      );
    }else{
      // Données form invalides
      flashService.printMessage('error', 'invalid url: .jpeg .jpg .png please!');
    }
  }

  /*
  Submit type fichier en upload
  $http.post('https://api.deepomatic.com/v0.6/detect/fashion/', $scope.yourModel, settings).then(function(data){
    console.log(data);
  }, function(err){
    console.log(err);
  });
  */
  
  
 
}]);
