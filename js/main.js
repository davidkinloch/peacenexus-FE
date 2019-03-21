(function($){
  $(function(){

    $('.sidenav').sidenav();

    $(".dropdown-trigger").dropdown();

     $('.tabs').tabs();

     $('.scrollspy').scrollSpy();
  }); // end of document ready

 if ('serviceWorker' in navigator) {
    navigator.serviceWorker
   .register('./service-worker.js')
   .then(function() { console.log('Service Worker Registered'); });
  }

})(jQuery); // end of jQuery name space
