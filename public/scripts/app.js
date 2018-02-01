/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {

  const ROOT_URL = "http://localhost:8080/"

  ////  used to test createTweet Element function

  // const tweetData = {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": {
  //       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  //       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  //       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  //     },
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  // }

  ////// used for renderTweets function

  //   const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  //         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  //         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  //       },
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
  //         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
  //         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
  //       },
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis asdasdasd asdasdasdasdasd aasdasdasdasds"
  //     },
  //     "created_at": 1461113959088
  //   },
  //   {
  //     "user": {
  //       "name": "Johann von Goethe",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
  //         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
  //         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
  //       },
  //       "handle": "@johann49"
  //     },
  //     "content": {
  //       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit. asdasdasdadfaasf bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbssssssssaaaaaa asdasdasdasd"
  //     },
  //     "created_at": 1461113796368
  //   }
  // ];

  /////// createTweeteElement test

  // let $tweet = createTweetElement(tweetData);
  // console.log($tweet);
  // $('#tweets').append($tweet);
  // $('#tweets').append($tweet);


  ///////// function to prevent cross-site scripting
  const escape = (str) => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = (tweetObj) => {

    let $tweet = $(`<div class="tweet">

                      <header class="tweet__header">
                        <img src="${tweetObj.user.avatars.regular}">
                        <h2>${tweetObj.user.name}</h2>
                        <span>${tweetObj.user.handle}</span>
                      </header>

                      <article>
                        <p>${escape(tweetObj.content.text)}</p>
                      </article>

                      <footer class="tweet__footer">
                        <p>${tweetObj.created_at} days ago</p>
                        <div class="tweet__icons">
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
  $('#nav-bar button').on('click', function(e) {
    console.log('clicked');
    $('.new-tweet').slideToggle();
    $('.new-tweet textarea').focus();
  });

});

