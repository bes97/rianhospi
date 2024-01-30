$(function(){
  var MenuData = [
    {depth1:'sub1',depth2:'sub_0',navhref:'./sub1_1.html',navlabel:'연세리안소개',navtarget:'_self'},
    {depth1:'sub1',depth2:'sub1_1',navhref:'./sub1_1.html',navlabel:'연세리안의 철학',navtarget:'_self'},
    {depth1:'sub1',depth2:'sub1_2',navhref:'./sub1_2.html',navlabel:'의료진 소개',navtarget:'_self'},
    {depth1:'sub1',depth2:'sub1_3',navhref:'./sub1_3.html',navlabel:'찾아오는길 / 연락처',navtarget:'_self'},

    {depth1:'sub2',depth2:'sub_0',navhref:'./sub2_1.html',navlabel:'연세리안의 특별함',navtarget:'_self'},
    {depth1:'sub2',depth2:'sub2_1',navhref:'./sub2_1.html',navlabel:'내부공간 둘러보기',navtarget:'_self'},
    {depth1:'sub2',depth2:'sub2_2',navhref:'./sub2_2.html',navlabel:'연세리안 멸균 소독시스템',navtarget:'_self'},
    {depth1:'sub2',depth2:'sub2_3',navhref:'./sub2_3.html',navlabel:'첨단 진료장비',navtarget:'_self'},

    {depth1:'sub3',depth2:'sub_0',navhref:'./sub3_1.html',navlabel:'임플란트 클리닉',navtarget:'_self'},
    {depth1:'sub3',depth2:'sub3_1',navhref:'./sub3_1.html',navlabel:'연세리안만의 특별함',navtarget:'_self'},
    {depth1:'sub3',depth2:'sub3_2',navhref:'./sub3_2.html',navlabel:'네비게이션 임플란트',navtarget:'_self'},
    {depth1:'sub3',depth2:'sub3_3',navhref:'./sub3_3.html',navlabel:'전악 임플란트',navtarget:'_self'},
    {depth1:'sub3',depth2:'sub3_4',navhref:'./sub3_4.html',navlabel:'뼈이식 임플란트',navtarget:'_self'},
    {depth1:'sub3',depth2:'sub3_5',navhref:'./sub3_5.html',navlabel:'발치 즉시 임플란트',navtarget:'_self'},
    {depth1:'sub3',depth2:'sub3_6',navhref:'./sub3_6.html',navlabel:'앞니 심미 임플란트',navtarget:'_self'},
    {depth1:'sub3',depth2:'sub3_7',navhref:'./sub3_7.html',navlabel:'임플란트 재수술',navtarget:'_self'},
    {depth1:'sub3',depth2:'sub3_8',navhref:'./sub3_8.html',navlabel:'보험 임플란트',navtarget:'_self'},
    {depth1:'sub3',depth2:'sub3_9',navhref:'./sub3_9.html',navlabel:'연세리안 임플란트 종류',navtarget:'_self'},

    {depth1:'sub4',depth2:'sub_0',navhref:'./sub4.html',navlabel:'치주치료 클리닉',navtarget:'_self'},
   /* {depth1:'sub4',depth2:'sub4_1',navhref:'./sub4.html',navlabel:'치주과 전문의의 특별한 치주 치료'},
    {depth1:'sub4',depth2:'sub4_2',navhref:'./sub4.html#con2',navlabel:'치주 치료의 중요성'},
    {depth1:'sub4',depth2:'sub4_3',navhref:'./sub4.html#con3',navlabel:'치주 치료의 종류'},
    {depth1:'sub4',depth2:'sub4_4',navhref:'./sub4.html#con4',navlabel:'치은 이식술'},
    {depth1:'sub4',depth2:'sub4_5',navhref:'./sub4.html#con5',navlabel:'건강보험 적용'},*/
    
    {depth1:'sub5',depth2:'sub_0',navhref:'./sub5.html',navlabel:'심미치료 클리닉',navtarget:'_self'},
   /* {depth1:'sub5',depth2:'sub5_1',navhref:'./sub5.html',navlabel:'심미치료의 중요성'},
    {depth1:'sub5',depth2:'sub5_2',navhref:'./sub5.html#con2',navlabel:'라미네이트'},
    {depth1:'sub5',depth2:'sub5_3',navhref:'./sub5.html#con3',navlabel:'올세라믹 크라운'}, 
    {depth1:'sub5',depth2:'sub5_4',navhref:'./sub5.html#con4',navlabel:'전치부 레진'},
    {depth1:'sub5',depth2:'sub5_5',navhref:'./sub5.html#con5',navlabel:'전문가 미백'},   */    
    
    {depth1:'sub6',depth2:'sub_0',navhref:'./sub6_1.html',navlabel:'자연치보존 클리닉',navtarget:'_self'},
    {depth1:'sub6',depth2:'sub6_1',navhref:'./sub6_1.html',navlabel:'충치치료',navtarget:'_self'},
    {depth1:'sub6',depth2:'sub6_2',navhref:'./sub6_2.html',navlabel:'신경치료',navtarget:'_self'},
    {depth1:'sub6',depth2:'sub6_3',navhref:'./sub6_3.html',navlabel:'사랑니 발치',navtarget:'_self'},
    {depth1:'sub6',depth2:'sub6_4',navhref:'./sub6_4.html',navlabel:'턱관절 치료',navtarget:'_self'},
    {depth1:'sub6',depth2:'sub6_5',navhref:'./sub6_5.html',navlabel:'구강검진',navtarget:'_self'},
    
    {depth1:'sub7',depth2:'sub_0',navhref:'./sub7_1.html',navlabel:'온라인상담',navtarget:'_self'},
    {depth1:'sub7',depth2:'sub7_1',navhref:'./sub7_1.html',navlabel:'온라인상담',navtarget:'_self'},
    {depth1:'sub7',depth2:'sub7_2',navhref:'https://map.naver.com/p/entry/place/1077599388?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.0609342&lat=37.6515441&c=15.00,0,0,0,dh',navlabel:'진료예약',navtarget:'_blank'},
    {depth1:'sub7',depth2:'sub7_3',navhref:'./sub7_3.html',navlabel:'공지사항',navtarget:'_self'},
    {depth1:'sub7',depth2:'sub7_4',navhref:'./sub7_4.html',navlabel:'Q & A',navtarget:'_self'},

  ];



  const result = MenuData.reduce(function(acc, cur) {
    const categoryIndex = acc.findIndex(item => item.name === cur.depth1);
    if (categoryIndex === -1) {
      acc.push({name: cur.depth1, data: [cur]});
    } else {
      acc[categoryIndex].data.push(cur);
    }
    return acc;
  }, []);
  // console.log("gnb_depth1::",result)

  gnb_depth1();  // depth1만 출력
  gnb_depth1_hover(); // depth1 오버시 depth2 출력
  gnb_depth1_click(); // depth1 클릭시 depth2 출력


  //서브별 추출 첫번째인자>depth1  두번째인자>출력장소
  gnb_depth2('sub1','.sub1');gnb_depth2('sub2','.sub2');gnb_depth2('sub3','.sub3');gnb_depth2('sub4','.sub4');gnb_depth2('sub5','.sub5');gnb_depth2('sub6','.sub6');gnb_depth2('sub7','.sub7');
  // gnb_depth2('sub1','sub1');gnb_depth2('sub2','sub2');gnb_depth2('sub3','sub3');gnb_depth2('sub4','sub4');gnb_depth2('sub5','sub5');gnb_depth2('sub6','sub6');gnb_depth2('sub7','sub7');

  // depth1만 필요한 경우
  function gnb_depth1() {
    for (let item of result) {
      const temp = document.createElement("li");
      temp.innerHTML = "<a href='" + item.data[0].navhref + "'>" +  item.data[0].navlabel + "</a>"
      $(".fndepth1").append(temp);
    }
  }

  // depth1 오버시 depth2 출력 
  function gnb_depth1_hover() {
    for (let item of result) {
      const temp = document.createElement("li");
      temp.innerHTML = "<a href='" + item.data[0].navhref + "' target='"+ item.data[0].navtarget +"'>" +  item.data[0].navlabel + "</a>"
      //console.log(temp)
      temp.setAttribute("data-nav",item.name)   
      // temp.classList.add('add')   //참고
      $(".fngnbover").append(temp);
    }     
    $('.fngnbover > li ').mouseenter(function(){
      $(".fnnavsub").show()
      $(".fnnavsub li").remove();
      // $(".header .depth2 ").show();  
      gnb_depth2($(this).data("nav"),".fnnavsub");
    })
}

  // depth1 클릭시 depth2 출력 
  function gnb_depth1_click() {
    for (let item of result) {
      const temp = document.createElement("li");
      temp.innerHTML = "<a href='" + item.data[0].navhref + "' target='"+ item.data[0].navtarget +"'>" +  item.data[0].navlabel + "</a>"
      //console.log(temp)
      temp.setAttribute("data-nav",item.name)   
      $(".fngnbover_mo").append(temp);
    }     
    $('.fngnbover_mo > li a').on("click",function(e){
      e.preventDefault();
  });
    $('.fngnbover_mo > li ').click(function(){
      $('.fngnbover_mo > li ').removeClass("on");
      $(this).addClass("on");
      $(".fnnavsub_mo").show()
      $(".fnnavsub_mo li").remove();
      // $(".header .depth2 ").show();  
      gnb_depth2($(this).data("nav"),".fnnavsub_mo");
    })
}

/* LNB 출력 */
  function gnb_depth2(category, el) { 

    // let subdata = $(".lnb").find(".fnsubmenu").data("sub");
    // console.log(subdata)}

    for (let item of MenuData) {
      if ( item.depth1 == category ) {
       
        if( item.depth2 == "sub_0" ) { 
            let elem = document.querySelector(el);
            let fnlnb = $(elem).closest(".fnlnb").find(".fnlnbtit");
            // let fnlnbtit = $(fnlnb).find("fnlnbtit");
           console.log("fnlnbtit::",fnlnb );
            $(fnlnb).append(item.navlabel);
        } else{
          const temp = document.createElement("li");
          temp.innerHTML = "<a href='" + item.navhref + "' target='" + item.navtarget + "'>"+  item.navlabel + "</a>"
          $(el).append(temp);
            // console.log( $(".fnnavsub") );
        }
      }

      // if ( item.depth1 == category && item.depth2 != "sub_0" ) {
      //   const temp = document.createElement("li");
      //   temp.innerHTML = "<a href='" + item.navhref + "'>"+  item.navlabel + "</a>"
      //   $(el).append(temp);
      //   console.log( $(".fnnavsub") );
      // }
    }
  }  

  if (window.innerWidth > 1180) {
    $(".header").mouseenter(function(){
      $(this).addClass("on");
      $(this).find(".depth2").fadeIn(100);
    })

    $(".header").mouseleave(function(){
      $(this).removeClass("on");
      $(this).find(".depth2").hide(100);
    })
  }
  // $(window).on("resize",function(){ 
  //   if (window.innerWidth > 1180) {
  //     $(".header").mouseenter(function(){
  //       $(this).addClass("on");
  //       $(this).find(".depth2").fadeIn(100);
  //     })
  
  //     $(".header").mouseleave(function(){
  //       $(this).removeClass("on");
  //       $(this).find(".depth2").hide(100);
  //     })
  //   }
  // })
})