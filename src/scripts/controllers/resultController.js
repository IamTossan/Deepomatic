myApp.controller('resultController', ['$scope', 'storeService', function($scope, storeService){

  // image à affiché > hardcodé
  $scope.item = storeService.store.length - 1;
     


}]);