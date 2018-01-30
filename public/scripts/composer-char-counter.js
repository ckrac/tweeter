$( document ).ready(function() {
    // console.log( "ready!" );
    $('.new-tweet').on('keyup', 'textarea', function(e) {
      console.log('length: ', this);
      let tweetLength = this.value.length;
      const maxLength = 140;
      let tweetCounter = maxLength - tweetLength;
      if (tweetLength > maxLength) {
        $(this).siblings('.counter').addClass('valid');
        $(this).siblings('.counter').text(tweetCounter);
      } else {
        $(this).siblings('.counter').removeClass('valid');
        $(this).siblings('.counter').text(tweetCounter);
      }
      // $(this).siblings('.counter').text(tweetCounter);
    });

});
