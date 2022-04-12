$(document).ready(function () {
    
    $('#cartIcon').click(function() {
        // $('#myDiv').toggle('slow', function() {
        //   // Animation complete.
        // });
        console.log("Logged Scripts!");
        $("#cartCard").toggleClass("d-block").toggleClass('d-none');;
      });

      /**
       * Slider
       */

       
       $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [{
          breakpoint: 1024
      },
          {
              breakpoint: 600,
              settings: {
                  arrows: true,
                  dots:true
              }
          },
          {
              breakpoint: 480,
              settings: {
                  dots:true,
                  autoplay: true,
                  arrows: true,
              }
          }
      ]
        
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
      });

      /**
       * Number of items
       */
      var count = 0;
      $('#increaseBtn').on('click', () => {
        count++;
        $("#noOfItmes").html(+count);
      });
      $('#decreaseBtn').on('click', () => {
        count--;
        $("#noOfItmes").html(count);
      });
});
