$( document ).ready(function() {
    // console.log( "ready!" );
    $('.new-tweet').on('keyup', 'textarea', function(e) {
      console.log('event: ', e);
      console.log('key: ', e.key);
      console.log(this);
    });

});
