$(document).ready(function () {
    // 捲軸偵測距離頂部超過 50 才顯示按鈕
    $(window).scroll(function () {
      if ($(window).scrollTop() > 60) {
        if ($(".back-top").hasClass("hide")) {
          $(".back-top").toggleClass("hide");
        }
      } else {
        $(".back-top").addClass("hide");
      }
    });
  
    // 點擊按鈕回頂部
    $(".back-top").on("click", function (event) {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        500 // 回頂部時間為 500 毫秒
      );
    });

    // 關於我們跑數字特效
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 8000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
    // end關於我們跑數字特效


    // 關於我們圖片輪播
    var timer = 4000;

    var i = 0;
    var max = $("body > #contents > #client > ul > li").length;

    $("body > #contents > #client > ul > li").eq(i).addClass("active").css("left", "0");
    $("body > #contents > #client > ul > li")
      .eq(i + 1)
      .addClass("active")
      .css("left", "20%");
    $("body > #contents > #client > ul > li")
      .eq(i + 2)
      .addClass("active")
      .css("left", "40%");
    $("body > #contents > #client > ul > li")
      .eq(i + 3)
      .addClass("active")
      .css("left", "60%");
    $("body > #contents > #client > ul > li")
      .eq(i + 4)
      .addClass("active")
      .css("left", "80%");

    setInterval(function () {
      $("body > #contents > #client > ul > li").removeClass("active");

      $("body > #contents > #client > ul > li").eq(i).css("transition-delay", "0.2s");
      $("body > #contents > #client > ul > li")
        .eq(i + 1)
        .css("transition-delay", "0.4s");
      $("body > #contents > #client > ul > li")
        .eq(i + 2)
        .css("transition-delay", "0.6s");
      $("body > #contents > #client > ul > li")
        .eq(i + 3)
        .css("transition-delay", "0.8s");
      $("body > #contents > #client > ul > li")
        .eq(i + 4)
        .css("transition-delay", "1s");

      if (i < max - 5) {
        i = i + 5;
      } else {
        i = 0;
      }

      $("body > #contents > #client > ul > li")
        .eq(i)
        .css("left", "0")
        .addClass("active")
        .css("transition-delay", "1.2s");
      $("body > #contents > #client > ul > li")
        .eq(i + 1)
        .css("left", "20%")
        .addClass("active")
        .css("transition-delay", "1.4s");
      $("body > #contents > #client > ul > li")
        .eq(i + 2)
        .css("left", "40%")
        .addClass("active")
        .css("transition-delay", "1.6s");
      $("body > #contents > #client > ul > li")
        .eq(i + 3)
        .css("left", "60%")
        .addClass("active")
        .css("transition-delay", "1.8s");
      $("body > #contents > #client > ul > li")
        .eq(i + 4)
        .css("left", "80%")
        .addClass("active")
        .css("transition-delay", "2s");
    }, timer);
    // end關於我們圖片輪播


// 1/12輪播1
    // Get the rotator element
    const rotator = document.querySelector('.rotator');

    // Get all rotator items
    const rotatorItems = document.querySelectorAll('.rotator-item');

    let currentIndex = 0;

    // Show the current rotator item and hide the others
    function showCurrent() {
      rotatorItems.forEach((item, index) => {
        if (index === currentIndex || index === currentIndex + 1) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Initialize the rotator
    showCurrent();

    // Move to the next item
    function next() {
      currentIndex += 2;
      
      if (currentIndex >= rotatorItems.length) {
        currentIndex = 0;
      }
      
      showCurrent();
    }

    // Move to the previous item
    function prev() {
      currentIndex -= 2;
      
      if (currentIndex < 0) {
        currentIndex = rotatorItems.length - 2;
      }
      
      showCurrent();
    }

    // Rotate the items every 5 seconds
    setInterval(next, 4000);



  });


$(document).ready(function(){
  $('.for_slick_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    centerMode: false,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

