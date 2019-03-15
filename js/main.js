(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})(jQuery); // end of jQuery name space
