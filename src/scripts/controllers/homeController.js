myApp.controller('homeController', ['$scope', 'storeService', '$state', function($scope, storeService, $state){

  $scope.list = storeService.store;

  $scope.relocate = function(item){

    $state.go('home.result', {id: $scope.list.indexOf(item)});

  };


}]);