var searchYouTube = (options, callback) => { // need to add back callback as a param
  var url = 'https://www.googleapis.com/youtube/v3/search';
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: url,
    type: 'GET',
    data: {
      part: 'snippet',
      type: 'video',    
      q: options.query || 'surfing',
      maxResults: options.max,
      key: options.key || window.YOUTUBE_API_KEY,
      videoEmbeddable: true
    },
    contentType: 'application/javascript',
    success: function (data) {
      callback(data.items);
      console.log('data successfully received');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('"GET" request failed - review your message', data);
    }
  });
};

window.searchYouTube = searchYouTube;
