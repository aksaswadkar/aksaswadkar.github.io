$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  // Initialise Animate On Scroll
  AOS.init({
    duration: 600
  });

  // ----------- smooth scroll ---------------
  $(".anchor-scroll").anchorScroll({
    scrollSpeed: 1000, // scroll speed
    offsetTop: 0, // offset for fixed top bars (defaults to 0)
    onScroll: function () {
      // callback on scroll start
    },
    scrollEnd: function () {
      // callback on scroll end
    }
  });
  // ------------ Skillsection mobile fix --------------
  if (window.innerWidth < 780) {
    $('#skill_py').addClass('offset-3 offset-md-0 mt-5 mt-md-0 mb-5')
    $('#skill_sql').addClass(' mt-1 mb-4 mt-md-0')
  }
  else {
    $('#skill_py').removeClass('offset-3 offset-md-0 mt-5 mt-md-0 mb-5')
    $('#skill_sql').removeClass('offset-3 offset-md-0 mt-1 mb-4 mt-md-0')
  
  }
  // ------------ Animate CSS----------------
  $(".topnav, #logo").hover(function () {
    $(this)
      .addClass("animated rubberBand")
      .one("animationend", function () {
        $(this).removeClass("animated rubberBand");
      });
  });

  $("#dev, #name").hover(function () {
    $(this)
      .addClass("animated tada")
      .one("animationend", function () {
        $(this).removeClass("animated tada");
      });
  });

  $(".features").hover(function () {
    $(this)
      .addClass("animated jello")
      .one("animationend", function () {
        $(this).removeClass("animated jello");
      });
  });

  // scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#topbtn").fadeIn();
    } else {
      $("#topbtn").fadeOut();
    }
  });
  $("#topbtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});

// ----------- TypeIt --------------
new TypeIt("#name", {
  strings: "Akshay Saswadkar",
  waitUntilVisible: true,
  lifeLike: true,
  cursor: false
}).go();

new TypeIt("#job", {
  waitUntilVisible: true,
  startDelay: 1500,
  lifeLike: true,
  cursor: false
}).go();

new TypeIt("#dev", {
  strings: "Software Developer",
  startDelay: 3000,
  waitUntilVisible: true,
  lifeLike: true,
  cursor: false
}).go();

new TypeIt("#likes", {
  startDelay: 5000,
  waitUntilVisible: true,
  lifeLike: true,
  cursor: false
}).go();

new TypeIt("#interest", {
  waitUntilVisible: true,
  speed: 150,
  loop: true,
  startDelay: 6500,
  lifeLike: true,
  cursor: false,
  breakLines: false
})
  .type("Binge Watching.")
  .pause(1000)
  .delete(15)
  .type("Gaming.")
  .pause(1000)
  .delete(7)
  .type("Python Programming.")
  .pause(1000)
  .delete(19)
  .type("Open Source.")
  .pause(1000)
  .delete(18)
  .type("Football.")
  .pause(1000)
  .delete(9)
  .go();

// ---------- Lazy load images ----------------
document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  console.log(lazyImages);
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});
