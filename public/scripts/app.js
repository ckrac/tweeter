/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {

  const ROOT_URL = "http://localhost:8080/"

  ///////// function to prevent cross-site scripting
  const escape = (str) => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = (tweetObj) => {

    let $tweet = $(`<div class="tweet">

                      <header class="tweet-header">
                        <img src="${tweetObj.user.avatars.regular}">
                        <h2>${tweetObj.user.name}</h2>
                        <span>${tweetObj.user.handle}</span>
                      </header>

                      <article>
                        <p>${escape(tweetObj.content.text)}</p>
                      </article>

                      <footer class="tweet-footer">
                        <p>${tweetObj.created_at} days ago</p>
                        <div class="tweet-icons">
                          <i class="fa fa-heart" aria-hidden="true"></i>
                          <i class="fa fa-retweet" aria-hidden="true"></i>
                          <i class="fa fa-flag" aria-hidden="true"></i>
                        </div>
                      </footer>

                    </div>`)

    return $tweet;
  }

  const renderTweets = (tweets) => {
  // loops through tweets
    for (let tweet_ of tweets) {
      // calls createTweetElement for each tweet
      let $tweetValue =createTweetElement(tweet_);
      // takes return value and appends it to the tweets container
      $('#tweets').prepend($tweetValue);
    }
  }

  ////// load all tweets via AJAX 'GET' request, then render them on page
  const loadTweets = () => {
    // make the AJAX call to load all the tweets from the API
    $.ajax({
      // use content from url to make tweets content for homepage
      url: '/tweets',
      method: 'GET',
      success: function (moreTweets) {
        // console.log('Success: ', moreTweets);
        //passed data from url to func to render homepage
        renderTweets(moreTweets);
      }
    });
  }

  //////// load tweets to homepage
  loadTweets();

  //////// generate a new tweet from a form submission
  $('.new-tweet form').on('submit', function(e) {
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: function (data) {
        // console.log(data);
        // clear textarea after submit
        $('.new-tweet textarea').val('');
        //remove previous tweets before load to solve duplication problem
        $('#tweets .tweet').remove();
        loadTweets();
      }
    });
    e.preventDefault();
  });


  ///////// check if tweet is valid, else show error
  $('.new-tweet input').on('click', function(e) {
      let textLength = $(this).siblings('textarea').val().length;
      // console.log(textLength);
      let $errorMessage1 = $(`<span> Tweet is longer than 140 characters</span>`);
      let $errorMessage2 = $(`<span> Please submit a tweet</span>`);
      if (textLength > 140) {
        $('.counter').text('Error:');
        $('.counter').append($errorMessage1);
        e.preventDefault();
      } else if (textLength === 0) {
        $('.counter').text('Error:');
        $('.counter').append($errorMessage2);
        e.preventDefault();
      }
  });

  ///////// slide new-tweet section up or down
  $('.nav-bar button').on('click', function(e) {
    // console.log('clicked');
    $('.new-tweet').slideToggle();
    $('.new-tweet textarea').focus();
  });

  ///// like button
  $('#tweets').on('click', '.fa-heart', function(e) {
    console.log('clicked')
  });

});

