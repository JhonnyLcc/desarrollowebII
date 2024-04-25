$(".button").click(function(){
  $(".page1").hide();
  $("#input1").hide();
  $("#input2").hide();
  $(".submit").hide();
  $(".page2").show();
  $(".page2").animate({
    height: '500px',
    width: '400px'
  });
}); 
$("#username").click(function(){
  $("#input1").slideDown();
});
$("#password").click(function(){
  $("#input2").slideDown();
});
$(".ck").click(function(){
  $(".submit").toggle();
});
$(".submit").click(function(){
  $(".page2").hide();
  $(".page1").hide();
  $(".page3").show();
}); 

$(".submit1").click(function(){
  $(".page1").hide();
  $(".page2").hide();
  $(".page3").hide();
  $("#em").hide();
  $("#um").hide();
  $("#pa").hide();
  $(".signups").hide();
  $("#rp").hide();
  $(".page4").show();
  $(".page4").animate({
    height: '550px',
    width: '400px'
  });
}); 

$("#signupe").click(function(){
  $("#em").slideDown();
});
$("#signupu").click(function(){
  $("#um").slideDown();
});
$("#signupp").click(function(){
  $("#pa").slideDown();
});
$("#signuprp").click(function(){
  $("#rp").slideDown();
});
$(".sc").click(function(){
  $(".signups").toggle();
});
$(".signups").click(function(){
  $(".page1").hide();
  $(".page2").hide();
  $(".page3").hide();
  $(".page4").hide();
  $(".page5").hide();
  $("#em").hide();
  $("#um").hide();
  $("#pa").hide();
  $(".signups").hide();
  $("#rp").hide();
  $(".page5").show();
  $(".page5").animate({
    height: '550px',
    width: '400px'
  });
}); 

$(".loginnow").click(function(){
  $(".page5").hide();
  $(".page1").hide();
  $(".page3").hide();
  $("#em").hide();
  $("#um").hide();
  $("#pa").hide();
  $(".signups").hide();
  $("#rp").hide();
  $(".page2").show();
  $(".page2").animate({
    height: '500px',
    width: '400px'
  });
}); 
 