$(document).ready(function() {
  $(".clickable").click(function() {
    $("#crab-shown").fadeToggle();
    $("#crab-hidden").slideToggle();
  });
});
