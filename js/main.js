$(function() {

  // $("body").css('background-color','#4fb0ae');

   $(".status").css('color','yellow');


  $(".switch").click(function( event){
    event.preventDefault();
      $(".plate").toggleClass("on","off");
  });

  $("body").click(function( event){
    event.preventDefault();
      $("body").toggleClass("dark","light");
  });


});
