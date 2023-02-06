(function ($) {
    "use strict";
    jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 120) {
            $(".navbar-area").addClass("is-sticky");
        } else {
            $(".navbar-area").removeClass("is-sticky");
        }
    });
    $(".search-box i").on("click", function () {
        $(".search-overlay").toggleClass("search-overlay-active");
    });
    $(".search-overlay-close").on("click", function () {
        $(".search-overlay").removeClass("search-overlay-active");
    });
    $(".hero-slider").owlCarousel({
        items: 1,
        loop: true,
        rtl: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: true,
        navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
    });
    $(".popup-youtube").magnificPopup({ disableOn: 320, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: false, fixedContentPos: false });
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    $(".partner-slider").owlCarousel({ loop: true, rtl: true, dots: false, margin: 30, nav: false, autoplay: true, autoplayHoverPause: true, responsive: { 0: { items: 2 }, 576: { items: 3 }, 768: { items: 4 }, 1200: { items: 5 } } });
    $(".testimonials-slider").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 30,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
        responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 992: { items: 2 } },
    });
    $(".atorn-gallery").magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] } });
    function makeTimer() {
        var endTime = new Date("november  30, 2023 17:00:00 PDT");
        var endTime = Date.parse(endTime) / 1000;
        var now = new Date();
        var now = Date.parse(now) / 1000;
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - days * 86400) / 3600);
        var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
        var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>روز</span>");
        $("#hours").html(hours + "<span>ساعت</span>");
        $("#minutes").html(minutes + "<span>دقیقه</span>");
        $("#seconds").html(seconds + "<span>ثانیه</span>");
    }
    setInterval(function () {
        makeTimer();
    }, 300);
    $(function () {
        $(".accordion")
            .find(".accordion-title")
            .on("click", function () {
                $(this).toggleClass("active");
                $(this).next().slideToggle("fast");
                $(".accordion-content").not($(this).next()).slideUp("fast");
                $(".accordion-title").not($(this)).removeClass("active");
            });
    });
    jQuery(window).on("load", function () {
        jQuery(".preloader").fadeOut(500);
    });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 0) {
            $(".go-top").addClass("active");
        } else {
            $(".go-top").removeClass("active");
        }
    });
    $(function () {
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $(".go-top").addClass("active");
            if (scrolled < 600) $(".go-top").removeClass("active");
        });
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });
    $("body").append("<a href='#' target='_blank' class='buy-now-btn'> دمو</a>");
    $("body").append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
})(jQuery);
function setTheme(themeName) {
    localStorage.setItem("atorn_theme", themeName);
    document.documentElement.className = themeName;
}
function toggleTheme() {
    if (localStorage.getItem("atorn_theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
}
(function () {
    if (localStorage.getItem("atorn_theme") === "theme-dark") {
        setTheme("theme-dark");
        document.getElementById("slider").checked = false;
    } else {
        setTheme("theme-light");
        document.getElementById("slider").checked = true;
    }
})();

 $('.datepicker-here').datepicker({
   dateFormat: 'yy/mm/dd',
    autoclose: false,
    minDate: new Date()
  })