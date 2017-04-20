$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$('body').fadeIn(800);

$(window).scroll(function (event) {

    var scroll = $(window).scrollTop();
    // Do something
    console.log(scroll)

    if (scroll > 300) {
      $("nav").fadeIn(1500, function(){
        setTimeout(function(){
          $("#carousel").fadeIn(500);

        },500)
      });
    }

    if (scroll > 1000){
      $("#main-content").css("visibility","visible")
      $("footer").show();
    }

    
});