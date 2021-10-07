var items = $(".experience-tl li"),
    timelineHeight = $('.experience-tl ul').height()
    midPoint = $(window).height() / 2,
    windowHeight = $(window).height();

    $(window).on('scroll', function(){
      
      items.each( function (index) {
        
        var liPosition = $(this).offset().top,
            position = $(window).scrollTop(),
            midPosition = position + (midPoint + 50);

        if( liPosition <= (midPosition)){
          $(this).addClass('in-view');
        }
      });
    });
