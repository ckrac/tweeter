$( document ).ready(function() {
    // check for keyup event when typing in the textarea
    $('.new-tweet').on('keyup', 'textarea', function(e) {
      // console.log('length: ', this);
      let tweetLength = this.value.length;
      const maxLength = 140;
      let tweetCounter = maxLength - tweetLength;
      // changes color to red if tweetLength exceeds maxLength
      if (tweetLength > maxLength) {
        $(this).siblings('.counter').addClass('valid');
        $(this).siblings('.counter').text(tweetCounter);
      } else {
        $(this).siblings('.counter').removeClass('valid');
        $(this).siblings('.counter').text(tweetCounter);
      }
    });
    // changes hover state of tweets
    $('#tweets').on('mouseenter', '.tweet', function(e) {
      $(this).addClass('tweet--hover');
    });
    $('#tweets').on('mouseleave', '.tweet', function(e) {
      $(this).removeClass('tweet--hover');
    });
});
