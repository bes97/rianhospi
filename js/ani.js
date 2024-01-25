$(function() {

    //패럴랙스
    // const fnparal = function(no){
    //   var wd = $(window);
     
    //   $('.paral').each(function(){
    //     var bg = $(this);
    //     if (no=='no' || bg.hasClass('on')) {
    //       bg.attr('style','');
    //       bg.addClass(no);
    //     } else {
    //       bg.removeClass('no');
    //       wd.scroll(function(){
    //         var yPos = -(wd.scrollTop() / 7); 
    //         var coords = '20%' + yPos + 'px';
    //         bg.css({backgroundPosition:coords});
    //       });
    //     }
    //   });
    // } 


      
    //scrollme 초기화
    let anim_obj = $('.scrollme')
    // if (isMobile) {
    //   anim_obj.find('.animateme ').removeClass('.animateme');
    // }
  
    //스크롤 애니메이션 초기화
    const $counters = $(".scrollon");  //translate
    const exposurePercentage = 20; 
    const loop = true;
    let lastScrollY = 0;
  
    $(window).on('scroll', function(e) {
      // fnfix();
      //스크롤 애니메이션업다운 체크
      const scrollY = window.scrollY;
      const scrollDown = scrollY > lastScrollY;
  
      //scrollme (width animateme) 애니 관련
      var cur_pos = $(this).scrollTop() + $(this).height();		
      anim_obj.each(function() {
        if ((cur_pos-100) >= $(this).offset().top-50) {
          $(this).stop().addClass('active');
        }
        else {
          $(this).stop().removeClass('active');
        }
      });
  
      // scollup down시 반응하는 애니
      if (scrollDown) {
  
        //scrollon 애니 관련
        $counters.each(function() {   //translate
          const $el = $(this);
          const rect = $el[0].getBoundingClientRect();
          const winHeight = window.innerHeight; 
          const contentHeight = rect.bottom - rect.top;
          if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
            $el.addClass('active');          
          }
          if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
              $el.removeClass('active');
          }
        });
  
      } else {
  
        if ( $(document).scrollTop() == 0 ) { 
          $counters.removeClass('active');
          $('.slidewrap .wpc').load(location.href+' #titwrap');
        }
        else $counters.addClass('active');
      }
      lastScrollY = scrollY;
    }) //.scroll();
    
     
    /* 리사이즈시 재구성되는 스크립트  */
  // if (window.innerWidth > 860) { 
  //   fnparal('');
  // }
  // else {      
  //   fnparal('no');
  // }


  //   $(window).on("resize",function(){ 
  //     $('.paral').attr('style','');
  //    if (window.innerWidth > 860) { 
  //       fnparal('');
  //     }
  //     else {      
  //       fnparal('no');
  //     }
  //   })
  
})