var $slider = $('.slider');
var $slideBox = $slider.find('.slide-box');
var $leftControl = $slider.find('.slide-left');
var $rightControl = $slider.find('.slide-right');
var $slides = $slider.find('.slide');
var numItems = $slider.find('.slide').length;
var position = 0;


var windowWidth = $(window).width();
$slides.width(windowWidth);
$leftControl.on('click', function(){
  var width = $slider.width();
  position = position - 1 >= 0 ? position - 1 : numItems - 1;
  if(position != numItems-1){
    $slider.find('.slide').eq(position + 1).css('margin-left', 0);
  }
  else{
    $slider.find('.slide:gt(0)').each(function(index){
      $(this).css('margin-left', width * -1 + 'px');
    });
  }
});

$rightControl.on('click', function(){
  var width = $slider.width();
  position = position + 1 < numItems ? position + 1 : 0;
  if(position != 0){
    $slider.find('.slide').eq(position).css('margin-left',  width * -1 + 'px');
  }
  else{
    $slider.find('.slide').css('margin-left', 0);
  }
});

$(window).resize(function(){
 $slides.width($(window).width()).height($(window).height);
});