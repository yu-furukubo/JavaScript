$(function (){
  $('.box1').slideDown(5000,function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp(1000);
  });
});