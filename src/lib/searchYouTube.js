var searchYouTube = (options, callback) => {
  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search/',
    data: {
      'key': options.key,
      'maxResults': options.max,
      'part': 'snippet',
      'q': options.query,
      'type': 'video',
      'videoEmbeddable': true
    },
    success: function(data){
      callback(data.items);
    },
    error: function(err){
      console.log(err);
    }
    // dataType: dataType
  });
};

window.searchYouTube = searchYouTube;
