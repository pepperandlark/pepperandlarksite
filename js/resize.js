$(document).ready(function(){
  portfolio_setup();
  portfolio_resize();
  random_header();
});

$(window).resize(function(){
  portfolio_resize();
});

function portfolio_setup() {
  $(".portfolio-box").each(function(){
    var link = $(this).attr("href");
    $(this).css("background-image","url("+link+")");
  });
}

function portfolio_resize() {
  var w = $(".portfolio-box").width();
  w = (w*3)/4;
  $(".portfolio-box").css("height",w);
}

function random_header() {
  var h = ["header1.jpg","header2.jpg","header3.jpg","header4.jpg","header5.jpg"];
  var hn = Math.floor(Math.random()*h.length);
  $("header").css("background-image","url(img/headers/" + h[hn] + ")");
}
