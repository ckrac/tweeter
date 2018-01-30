$( document ).ready(function() {
    // console.log( "ready!" );
    $('.new-tweet').on('keyup', 'textarea', function(e) {
      // console.log('event: ', e);
      console.log('length: ', this);
      // console.log($(this));
      let tweetLength = this.value.length;
      console.log(tweetLength);
      $(this).siblings('.counter').text(tweetLength);
    });

});
