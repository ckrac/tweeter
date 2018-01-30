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

    $('#tweets').on('mouseenter', '.tweet', function(e) {
      $(this).addClass('tweet--hover')
      //$(this).find('.tweet__icons').addClass('tweet__icons--hover');
    })
    $('#tweets').on('mouseleave', '.tweet', function(e) {
      $(this).removeClass('tweet--hover')
      //$(this).find('.tweet__icons').removeClass('tweet__icons--hover')
    })
    /*
      $(this).on('mouseleave', function(e) {
        $(this).removeClass('hover');
      });
    });*/

});
