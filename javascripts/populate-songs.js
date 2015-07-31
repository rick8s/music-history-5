define(function() {
 
  var songs;

  $.ajax({
		url: "songs.json",
    async: false
  }).done(function(data) {
    songs = data;
  });

  return {
    songs: songs
  }
  
});
