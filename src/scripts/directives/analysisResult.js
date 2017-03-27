myApp.directive('analysisResult', ['storeService', '$timeout', 'flashService', function(storeService, $timeout, flashService){

  return{
    scope: {
      item: '='
    },
    restrict: 'E',
    templateUrl: 'views/partials/analysisResult.html',
    link: function(scope, element, attrs){
      
      scope.currentItem = storeService.store[scope.item];
      scope.analysisData = [];

      // récupérer analyse > appel API de l'analyse | local(appel déjà fait)
      var fetchBoxes = function(){
        if (!scope.currentItem.analysisFetched){
          storeService.fetchAnalysis(scope.item).then(
            function(data){
              if(storeService.store[scope.item].analysisFetched){
                scope.analysisData = storeService.store[scope.item].analysisData;
                drawBoxes();
              }else{
                // analyses pas encore dispo > retry 1s
                $timeout(function(){
                  fetchBoxes();
                }, 1000);
              }
            },
            function(error){
              flashService.printMessage('alert', 'erreur API analyse')
              console.log(error);
            }
          );
        } else{
          // données déjà recues avant
          drawBoxes();
        }
      }

      // afficher l'analyse sous forme de cadres sur l'image
      var drawBoxes = function(){
        scope.analysisData.forEach(function(item){
          var targetY = $('.analysisResult').height();
          var targetX = $('.analysisResult').width();
          var newEl = '<div class="analysisBox '
            + item.name
            + '" style="top:' 
            + (item.ymin * targetY) 
            + 'px;left: ' 
            + (item.xmin * targetX) 
            + 'px;width: '
            + ((item.xmax - item.xmin) * targetX)
            + 'px; height: '
            + ((item.ymax - item.ymin) * targetY)
            + 'px;"></div>';
          $(newEl).appendTo('.analysisResult');
        });
      }
      
      
      fetchBoxes();
     
    }
  }

}]);