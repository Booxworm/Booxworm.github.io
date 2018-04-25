$(document).ready(function(){
  $("image-text").hide();
  
  $(".projects > div").mouseover(function(){
    $(this).find(".thumbnail").css("opacity", 0.2);
    $(this).find(".image-text").show();
  }).mouseout(function(){
    $(this).find(".thumbnail").css("opacity", 1);
    $(this).find(".image-text").hide();
  });
});
