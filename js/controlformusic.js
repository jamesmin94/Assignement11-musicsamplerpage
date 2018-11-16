$(document).ready(() => {

  $(".player-container").hide();
  $(".mplayer").hide();
  $("#song1des").show();
  $("#player1").show();

  var current = "song1";

  function resetAll() {
    $(".player-container").hide();
    $(".mplayer").hide();
    $('audio').each(function() {
      this.pause();
      this.currentTime = 0;
    });

  }

  $('.clickable').click(function() {
    if(current != $(this).attr("id")) {
      switch ($(this).attr("id")) {
        case "song1":
          resetAll();
          $("#song1des").show();
          $("#player1").slideToggle(1000);
          break;

        case "song2":
          resetAll();
          $("#song2des").show();
          $("#player2").slideToggle(1000);
          break;

        case "song3":
          resetAll();
          $("#song3des").show();
          $("#player3").slideToggle(1000);
          break;

          case "song4":
            resetAll();
            $("#song4des").show();
            $("#player4").slideToggle(1000);
            break;
      }
      current = $(this).attr("id");
    }
  });
})
