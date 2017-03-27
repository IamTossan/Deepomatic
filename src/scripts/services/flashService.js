myApp.factory('flashService', [function(){

  // service de feedback par message > UX

  var factory = {
    printMessage: function(type, text) {
        var element;
        // On cache les alerts au cas où une était déjà ouverte
        jQuery('.alert').hide(0); 

        // sélection type de message 
        if(type == 'success') element = jQuery('.alert.alert-success');
        if(type == 'info') element = jQuery('.alert.alert-info');
        if(type == 'error') element = jQuery('.alert.alert-danger');

        element.find('a.alert-link').html(text);
        element.fadeIn(400);
        element.delay(3000).fadeOut(400);
    }
  }
  return factory;

}]);


