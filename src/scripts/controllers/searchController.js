myApp.controller('searchController', ['$scope', '$http', '$state', 'storeService', 'flashService', function($scope, $http, $state, storeService, flashService){

  
  $scope.regex = /(.jpe?g|.png)$/;

  // Submit type url  
  $scope.submit = function(){
      
    if($scope.searchForm.$valid){
      flashService.printMessage('success', 'uploading...');
      storeService.postUrl($scope.myUrl).then(
        function(data){
          flashService.printMessage('success', 'image uploaded');
          $state.go('home.result', {id: storeService.store.length - 1});
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

  //Submit type fichier en upload
  $scope.submitFile = function(){
    
    if($scope.uploadForm.$valid){
      flashService.printMessage('success', 'uploading...');
      storeService.postFile($scope.myFile.base64).then(
        function(data){
          flashService.printMessage('success', 'image uploaded');
          $state.go('home.result', {id: storeService.store.length - 1});
        },
        function(error){
          console.log(error);
        }
      );
    }else{
      // Données form invalides
      flashService.printMessage('error', 'invalid file: .jpeg .jpg .png please!');
    }
  }

 
  
 
}]);
