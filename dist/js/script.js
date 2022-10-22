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

      //modal

      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');

      });

      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanx, #order').fadeOut('slow');
      });

      // $('.button_mini').on('click', function() {
      //   $('.overlay, #order').fadeIn('slow');
      // });

      // $('.button_submin').on('click', function() {
      //   $('.overlay, #thanx').fadeIn('slow');
      // });

      $('.button_mini').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__dscr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');          
        });
      });

      // $('#consultation-form').validate();
      // $('#consultation form').validate({
      //   rules: {
      //     name: "required",
      //     phone: "required",
      //     email: {
      //       required : true,
      //       email: true
      //     }
      //   },
      //   messages: {
      //     name: "Пожалуйста, введите свое имя",
      //     phone: "Пожалуйста, введите свой номер телефона",
      //     email: {
      //       required: "Пожалуйста, введите свой email",
      //       email: "Нерпвильный формат ввода почты"
      //     }
      //   }
      // });
      // $('#order form').validate();

      function validateForm(form) {
        $(form).validate({
          rules: {
            name: "required",
            phone: "required",
            email: {
              required : true,
              email: true
            }
          },
          messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свой email",
              email: "Неправильный формат ввода почты"
            }
          }
        });
      };

      validateForm('#consultation-form');
      validateForm('#consultation form');
      validateForm('#order form');

      $('input[name=phone]').mask("+38 (999) 999-9999");

      $('form').submit(function(e) {
          e.preventDefault();

          if (!$(this).valid()) {
            return;
          }

          $.ajax({
            type: "POST",
            url: "./mailer/smart.php",
            data: $(this).serialize()
          }).done(function() {
            $(this).find("input").val("");
            
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanx').fadeIn('slow');

            $('form').trigger('reset');
          });
          return false;
      });

      //scroll

      $(window).scroll(function() {
        if($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      });

      // $('a[href="#up"]').click(function() {
      //   const _href = $(this).attr("href");
      //   $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      //   return false;
      // });

      $('a[href="#up"]').on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        } 
      });

      new WOW().init();

      

  });