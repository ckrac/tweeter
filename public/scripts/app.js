/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {

  /* -------------- used to test createTweet Element function --------------- */

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

  /* -------------- used for renderTweets function --------------- */

  const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis asdasdasd asdasdasdasdasd aasdasdasdasds"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit. asdasdasdadfaasf bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbssssssssaaaaaa asdasdasdasd"
    },
    "created_at": 1461113796368
  }
];

  /* --------------  createTweeteElement test --------------- */

  // let $tweet = createTweetElement(tweetData);
  // console.log($tweet);
  // $('#tweets').append($tweet);
  // $('#tweets').append($tweet);

  /* --------------  --------------- */

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

  /* --------------  --------------- */

  function renderTweets(tweets) {
  // loops through tweets
    for (let tweet_ of tweets) {
    // calls createTweetElement for each tweet
    let $tweetValue =createTweetElement(tweet_);
    // takes return value and appends it to the tweets container
    $('#tweets').append($tweetValue);
    }
  }

  /* -------------- call Function to render index page --------------- */

  renderTweets(data);

});

