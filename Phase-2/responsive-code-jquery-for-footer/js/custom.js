const footerH3 = $(".footer-links-wrapper h3");
// Selecting the elemint
    
  if ($(window).width() < 768) {
    // conditional checking 
    footerH3.on('click', function () {
      $(this).next("ul").slideToggle(500);
      $(this).toggleClass("expanded");
    });
  }

  $(window).on('resize', ()=> {
    // if ($(window).width() >= 768) {
    //   $(".footer-links-wrapper h3").off("click");
    //   $(".footer-links-wrapper ul").show();
    // }
    location.reload();
  });




