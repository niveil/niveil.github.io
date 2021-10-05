var expID = $('#exp .exp').map(function() {
  return $(this).attr('id');
}).get();

// const ids = document.querySelectorAll('.exp');
// const observer = new IntersectionObserver(entries => {
//     entries.forEach((entry) => {
//         if(!entry.isIntersecting){
//           entry.target.classList.remove('draw-tl-animation');
//           return;
//         }
//         entry.target.classList.add('draw-tl-animation');
//     })
// });

// ids.forEach(id => observer.observe(id));
// // console.log(expID);
// // var condID = [];

// // for(let index = 0; index < expID.length; index++){
// //     condID.push('#' + expID[index]);
// // }

// console.log(expID);




// for(let i =0; i<expID.length; i++){
//   animationTrigger(expID[i]);
// }

// function animationTrigger(id){
  // for (let index = 0; index < expID.length; index++) {

  //   const clientWindow = new IntersectionObserver(entries => {
  //       entries.forEach(entry => {

  //               const tar = entry.target.querySelector("#" + expID[index]);
  //               console.log(tar);
  //               if (entry.isIntersecting){
  //                   tar.classList.add('draw-tl-animation');
  //                   return;
  //               }
  //               tar.classList.remove('draw-tl-animation');
            
  //       });
  //   });

  //   clientWindow.observe(document.querySelector("#" + expID[index]));
  // }
// }





// THIS WORKS
var items = $(".experience-tl li"),
    timelineHeight = $('.experience-tl ul').height(),
    bgLine = $('.default-tl'),
    lineToDraw = $('.draw-tl');

// console.log("lineToDraw_top: " + lineToDraw.offset().top + "   linetoDraw_outerheight: " + lineToDraw.outerHeight(true));
    
if(lineToDraw.length){
  $(window).on('scroll',function (){


    var redLineHeight = lineToDraw.height(),
    bgLineHeight = bgLine.height(),
    windowDistance = $(window).scrollTop(),
    windowHeight = $(window).height() / 2,
    timelineDistance = $(".experience-tl").offset().top;

    if(windowDistance >= timelineDistance - windowHeight) {
      line = windowDistance - timelineDistance + windowHeight;

      if(line <= bgLineHeight) {
        lineToDraw.css({
          'height' : line + 20 + 'px'
        });
      }
    }
 

    var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
  
    items.each(function(index){
      var circlePosition = $(this).offset();
      
      if(bottom > circlePosition.top + 50) {	
        // console.log(bottom);			
        $(this).addClass('in-view');
      } else {
        $(this).removeClass('in-view');
      }
    });	
  });
}

