$( document ).ready(function() {
    // console.log( "ready!" );
    $('.new-tweet').on('keyup', 'textarea', function(e) {
      // console.log('event: ', e);
      console.log('length: ', this.value.length);
      console.log('value: ', this.value);

    });

});
