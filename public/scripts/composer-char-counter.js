$( document ).ready(function() {
    // console.log( "ready!" );
    $('.new-tweet').on('keyup', 'textarea', function(e) {
      console.log('event: ', e);
    });

});
