window.onload = function(){
  $(".jumpToTop").click(function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop: 0}, "fast");
    return null;
  });
  return null;
}
