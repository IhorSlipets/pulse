$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        centerMode: true,
        centerPadding: '0px',
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left_arr.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/right_arr.png"></button>',
        // responsive: [
        //     {
        //       breakpoint: 991,
        //       settings: {
        //         arrows: false,
        //         dots: false,
        //         prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left_arr.png"></button>',
        //         nextArrow: '<button type="button" class="slick-next"><img src="./icons/right_arr.png"></button>',
        //         variableWidth: true,
        //         adaptiveHeight: true
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         arrows: false,
        //         prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left_arr.png"></button>',
        //         nextArrow: '<button type="button" class="slick-next"><img src="./icons/right_arr.png"></button>',
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1,
        //         variableWidth: true,
        //         adaptiveHeight: true
        //       }
        //     }
        //   ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      // $('.catalog-item__link').each(function(i) {
      //   $(this).on('click', function(e) {
      //     e.preventDefault();
      //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      //   })
      // })

      // $('.catalog-item__back').each(function(i) {
      //   $(this).on('click', function(e) {
      //     e.preventDefault();
      //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      //   })
      // })

      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        })        
      };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

  });