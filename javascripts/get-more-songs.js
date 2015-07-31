
define(function() {
 
  var songs;

  $.ajax({
    url: "songs2.json",
    async: false
  }).done(function(data) {
    songs = data;
  });

  return {
    songs: songs
  }
  
});
