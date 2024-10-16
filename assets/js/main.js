/**
* Template Name: Logis
* Updated: Jan 29 2024 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


// function __fn_chkboxAll(){
//     // 체크박스 전체선택 전체해제
//     $('#chk_all').on('click', function(){
//         // 클릭 되었을때
//         if($('#chk_all').prop('checked')){
//             $("input[name=mycheck]:checkbox").prop("checked", true);    
//         // 클릭 안 되었을때
//         } else{
//             $("input[name=mycheck]:checkbox").prop("checked", false);
//         }
//     });
// }
// __fn_chkboxAll();

$.datepicker.setDefaults($.datepicker.regional['ko']); 
$( "#startDate" ).datepicker({
        dateFormat: 'yy-mm-dd',
        showMonthAfterYear: true,
        changeMonth: true,
        changeYear: true,
        showOn: "both",
        buttonImage: "",
        buttonImageOnly: false,
        yearSuffix: '.',
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        maxDate: 0,                       // 선택할수있는 최소날짜, ( 0 : 오늘 이후 날짜 선택 불가)
        onClose: function( selectedDate ) {    
            //시작일(startDate) datepicker가 닫힐때
            //종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
            $("#endDate").datepicker( "option", "minDate", selectedDate );
        }    

});
$( "#endDate" ).datepicker({
        dateFormat: 'yy-mm-dd',
        showMonthAfterYear: true,
        changeYear: false,
        changeMonth: false,
        showOn: "both",
        buttonImage: "",
        buttonImageOnly: false,
        yearSuffix: '.',
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        // maxDate: 0,                       // 선택할수있는 최대날짜, ( 0 : 오늘 이후 날짜 선택 불가)
        onClose: function( selectedDate ) {    
            // 종료일(endDate) datepicker가 닫힐때
            // 시작일(startDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 시작일로 지정
            $("#startDate").datepicker( "option", "maxDate", selectedDate );
        }    

});

// 추가, 삭제 : input
fn__inputAddRemove($("#specialField")); // 전문분야
fn__inputAddRemove($("#localArea")); // 지역
function fn__inputAddRemove(obj) {
    let $target = obj;
    let row = $target.children(".attr");
    let $add = $target.find(".inputAdd")
    let $remove = $target.find(".inputRemove");

    function addRow() {
        row.clone(true, true).appendTo($target);
    }

    function removeRow(button) {
        button.closest(".attrWrap li.attr").remove();
    }

    $target.children('.attr:first-child').find('.inputRemove').hide();
    $target.children('.attr').children("label").hide();

    $add.on('click', function () {
        addRow();  
        if($target.children(".attr").length > 1) {
            $(".inputRemove").show();
            $('.inputAdd').hide();
            $target.children('.attr:first-child').find('.inputRemove').hide();
            $target.children('.attr:first-child').find('.inputAdd').show();
        }
    });
    $remove.on('click', function () {
        if($target.children(".attr").size() == 1) {
            $remove.hide();
        } else {
            removeRow($(this));
            $target.children('.attr:first-child').find('.inputRemove').hide();
        }
    });
}

// 회원가입2 경력관련 체크
function radioDisabledChk() {
    let $target = $('.careerinfo');

    $target.find(".col").each(function () {
        $(this).find(".disableChk input:radio").on('change', function() {
            if ($(this).val() == "Disable") {
                $(this).parent().siblings(".text-try").attr('disabled', true);
                $(this).parent().parent().siblings().find(".text-try").attr('disabled', true);
            }
            else {
                $(this).parent().siblings(".text-try").attr('disabled', false);
                $(this).parent().parent().siblings().find(".text-try").attr('disabled', false);
            }
        });
    })
}
