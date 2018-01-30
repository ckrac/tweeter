/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  let $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $('#tweets').append($tweet);
  $('#tweets').append($tweet);

  function createTweetElement (tweetObj) {

    let $tweet = $(`<div class="tweet">

                      <header class="tweet__header">
                        <img src="${tweetObj.user.avatars.regular}">
                        <h2>${tweetObj.user.name}</h2>
                        <span>${tweetObj.user.handle}</span>
                      </header>

                      <article>
                        <p>${tweetObj.content.text}</p>
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

});
