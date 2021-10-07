var expID = $('#exp .exp').map(function() {
  return $(this).attr('id');
}).get();

var items = $(".experience-tl li"),
    timelineHeight = $('.experience-tl ul').height()
    midPoint = $(window).height() / 2,
    windowHeight = $(window).height();
    // bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
    // console.log("Window Mid Point: " + $(window).height() / 2);
    // console.log("Window Height: " + $(window).height());
    
    
    
      
    
    $(window).on('scroll', function(){
      items.each( function (index) {
        var liPosition = $(this).offset().top;
        var position = $(window).scrollTop();
        var midPosition = position + (midPoint + 50); 
        // console.log("ScrollTop Position: " + position);
        // console.log("midPoint: " + midPoint  + "   Pos - windHeight: " + (position-windowHeight));
        console.log("liPosition: " + liPosition  + "   Pos: " + midPosition);
        if( liPosition <= (midPosition)){
          console.log("Trigger");
          $(this).addClass('in-view');
        } else {
          // $(this).removeClass('in-view');
          // console.log("Removed");
        }
      });
    });
  
// items.each(function(index){
//   var circlePosition = $(this).offset();
  
//   if(bottom > circlePosition.top) {	
//     // console.log(bottom);			
//     $(this).addClass('in-view');
//   } else {
//     $(this).removeClass('in-view');
//   }
// });	


// // THIS WORKS
// var items = $(".experience-tl li i"),
//     timelineHeight = $('.experience-tl ul').height(),
//     bgLine = $('.default-tl'),
//     lineToDraw = $('.draw-tl');

// // console.log("lineToDraw_top: " + lineToDraw.offset().top + "   linetoDraw_outerheight: " + lineToDraw.outerHeight(true));
    
// if(lineToDraw.length){
//   $(window).on('scroll',function (){


//     var redLineHeight = lineToDraw.height(),
//     bgLineHeight = bgLine.height(),
//     windowDistance = $(window).scrollTop(),
//     windowHeight = $(window).height() / 2,
//     timelineDistance = $(".experience-tl").offset().top;

//     if(windowDistance >= timelineDistance - windowHeight) {
//       line = windowDistance - timelineDistance + windowHeight;

//       if(line <= bgLineHeight) {
//         lineToDraw.css({
//           'height' : line + 20 + 'px'
//         });
//       }
//     }
 

//     var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
  
//     items.each(function(index){
//       var circlePosition = $(this).offset();
      
//       if(bottom > circlePosition.top) {	
//         // console.log(bottom);			
//         $(this).addClass('in-view');
//       } else {
//         $(this).removeClass('in-view');
//       }
//     });	
//   });
// }

