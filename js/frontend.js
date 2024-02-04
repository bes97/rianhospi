/*
  인클루드 된 파일들은 해당 스크립트를 각 파일에 작성함
  >> 헤더(예약), 네비, 푸터
*/

$(function(){
  
  /* 유지보수 */
  $(".reser_btn").click(function() {
    window.open('http://booking.pension.onda.me/136969/calendar');
  })
  $(".fnsns .sns1").click(function(){ window.open('카카오링크'); })
  $(".fnsns .sns2").click(function(){ window.open('네이버링크'); })
  $(".fnsns .sns3").click(function(){ window.open('블로그링크'); })
  $(".fnsns .sns4").click(function(){ window.open('인스타링크'); })
  

  /* UI */
  var isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
  }

  $(".linktop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });


  /* rolling  */
  const $wrap = $('.animated-title');
  const $list = $('.animated-title .track');
  let wrapWidth = $wrap.width();
  let listWidth = $list.width();
  const speed = 30; 
  let $clone = $list.clone();
  $wrap.append($clone);
  function flowBannerAct() {
    if (listWidth < wrapWidth) {
        const listCount = Math.ceil(wrapWidth * 2 / listWidth);
        for (let i = 2; i < listCount; i++) {
            $clone = $clone.clone();
            $wrap.append($clone);
        }
    }
    $wrap.find('.track').css({
        'animation': `${listWidth / speed}s linear infinite marquee`
    });
  } 

  flowBannerAct();

  $(".lazy").slick({
    lazyLoad: 'ondemand',
    slideToShow: 1,
    slideToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    swiper: false,
    pauseOnHover : true,
    draggable: true,
    touchMove : true, 
    arrows: true,
    dots: false,
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows:false,
        autoplay: true,
        pauseOnHover : false,
      }
    },]
  });
 $(".lazyno").slick({
    lazyLoad: 'ondemand',
    slideToShow: 1,
    slideToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    fade: true,
    swiper: false,
    pauseOnHover : true,
    draggable: true,
    touchMove : true, 
    arrows: true,
    dots: true,
    customPaging: function (slider, i) {
      let page_cnt = i + 1
      let page_cnt_str
      if (page_cnt < 10) { page_cnt_str = '0' + page_cnt }
      curpage = '<span class="curpage"><i>' + page_cnt_str + '</i><i>RE</i><i>:</i></span>';
      // total = '<span class="total">' + slider.slideCount + '</span>';
      // return curpage + total;
      return curpage
    },
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows:false,
        autoplay: true,
        pauseOnHover : false,
      }
    },]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-for',
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows:false,
      }
    },]
  });

 $(".lazyno2").slick({
    lazyLoad: 'ondemand',
    slideToShow: 1,
    slideToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    fade: true,
    swiper: false,
    pauseOnHover : true,
    draggable: true,
    touchMove : true, 
    arrows: true,
    dots: true,
    customPaging: function (slider, i) {
      curpage = '<span class="curpage">' + (i + 1) + '</span> / ';
      total = '<span class="total">' + slider.slideCount + '</span>';
      return curpage + total;
    },
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows:false,
        autoplay: true,
        pauseOnHover : false,
      }
    },]
  });
  $(".center").slick({
    centerMode: false,
    arrows: true,
    dots: false,
    infinite: true,
    swiper: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover : true,
    draggable: true,
    touchMove : true,
    easing: 'linear',
    responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      arrows:false,
    }
  },]
  });
  
  // 메뉴스크롤링

  var menu = $(".scrolltab li");
	var content = $(".scrollitem");
	
	menu.click(function(event){
		event.preventDefault();
		
		var tg = $(this);
		var idx = tg.index();
		var section = content.eq(idx);
		var tt = section.offset().top;

		$("html,body").stop().animate({scrollTop:tt});
		})
		
		$(window).scroll(function(){
		  var location = $(window).scrollTop();
      var winheight =  $(window).innerHeight
		  content.each(function() {
        var tg = $(this);
			  var idx = tg.index();
       
       // if ($(document).scrollTop() >= window.innerHeight) {
       /* if ($(document).scrollTop() >= $('.tour-area .content').offset().top) {
          $(".gnb").addClass("fix");
          if ( $(document).scrollTop() > $('#footer').offset().top -  window.innerHeight /2 ) {
            $(".gnb").addClass("abs");
          } else  $(".gnb").removeClass("abs");
        } */
        
			  if(tg.offset().top <= location + 100){ 
				  menu.removeClass("on");
				  menu.eq(idx).addClass("on");
				}
    });		
  });//scroll() 끝


  /*******************백업***************** */

  // 세로용 비디오 
  if (window.innerHeight > window.innerWidth) {
    $('.vert_img').show();
    $('.hor_img').hide();
  } else {
    $('.vert_img').hide();
    $('.hor_img').show();
  }


     /* 픽스 레이아웃 처리  */
     const fnfix = function() {
      let footerH = $('.footwrap').height();
      $('body').css({'padding-bottom':footerH});

      if ($('.imgwrap_full.paral-area').length) {
        if (window.innerHeight > window.innerWidth) {
          if ($(document).scrollTop() > ($('.imgwrap_full.paral-area ').offset().top - window.innerHeight) && 
          $(document).scrollTop() < ($('.imgwrap_full.paral-area ').offset().top - 200 )) {

            // $('.imgwrap_full.paral-area ').find('.fixed').css({'position':'fixed'});
            $('.imgwrap_full.paral-area ').find('.fixed').addClass('fixon');
            $('.imgwrap_full .fixed').css({'z-index':1});
            $('#footer').css({'z-index':0});

          } else if ($(document).scrollTop() > ($('#footer').offset().top - window.innerWidth/3 + 200 )) {

                $('.imgwrap_full .fixed').css({'z-index':0});
                $('#footer').css({'z-index':1});

          } else {

            // $('.imgwrap_full.paral-area ').find('.fixed').css({'position':'absolute'});
            $('.imgwrap_full.paral-area ').find('.fixed').removeClass('fixon');
            $('.imgwrap_full .fixed').css({'z-index':0});
            $('#footer').css({'z-index':1});

          }
        } else {

          if ($(document).scrollTop() < ($('#footer').offset().top - window.innerHeight)) {

            $('.imgwrap_full .fixed').css({'z-index':1})
            $('#footer').css({'z-index':0})

          } else { 

            $('.imgwrap_full .fixed').css({'z-index':0})
            $('#footer').css({'z-index':1})

          }

        }
      }

    }
    fnfix();

    $(window).on('scroll', function(e) {
      fnfix();
    })

  $(window).on("resize",function(){ 
    if (window.innerHeight > window.innerWidth) {
      $('.vert_img').show();
      $('.hor_img').hide();
    } else {
      $('.vert_img').hide();
      $('.hor_img').show();
    }
  })

  //토글 expand
  $('.acc_tit').on('click',function(){
    $(this).toggleClass('on');
    $(this).next().slideToggle();
  })

})


//  버튼클릭시 띄우는 팝업
function popupbtn (e){
  // let popupid = $(this).data("target");
  let popupid = $(e).data("target");
  $(popupid).fadeIn(500);
  if ($(popupid).find("video")) {
    $(popupid).find("video").load;
  }
}
function popupclose (e){
  // $(this).closest('.popup').fadeOut(500);
  $(e).closest('.popup').fadeOut(500);
}


