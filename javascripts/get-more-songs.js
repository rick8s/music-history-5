// define(["dom-access"], function(dom) {
//   var outputEl = dom.getOutputElement();

//   $("#more").click(function() {	
// 	$.ajax({
// 		url: "songs2.json"
//   }).done(function(data) {
// 	   addSongs(data)
//     })
//   });
// });

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
