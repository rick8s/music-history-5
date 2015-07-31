requirejs(
  ["dom-access", "populate-songs", "get-more-songs"], 
  function(dom, pop, getMore) {
    console.log("dom", dom);
    console.log("pop", pop.songs);
    console.log("getMore", getMore.songs);


    addSongs(pop.songs, dom);
    
    $("#more").click(function() { 
     addSongs(getMore.songs, dom); 
  });

  }

  
);

function addSongs(data, domElementFromDomAccess) {

  for (var i=0;i<data.songs.length;i++) {
    
    var outputStr = "";

    outputStr += "<div class='song'><p>" + data.songs[i].title + "</p><ul>";
    outputStr += "<li>" + data.songs[i].artist + "</li>" ;
    outputStr += "<li>" + data.songs[i].album + "</li>" ;
    outputStr += "<li>" + data.songs[i].genre + "</li></ul>"; 
    outputStr += "<button id='deleteButton' class='remove'>Delete Song</button></div>";


    domElementFromDomAccess.getOutputElement().append(outputStr);
    console.log("#newSongs");
  }
}

$( document ).on( "click", "#deleteButton", function() {
  $( this ).parent().remove();
});





