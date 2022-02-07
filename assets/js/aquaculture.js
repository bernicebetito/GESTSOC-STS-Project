$(document).ready(function () {
    var slideIndex = 2
    var slides_timer
    initSlides()
    setSlidesTimer()

    function initSlides() {
        var aqua_slides = document.getElementsByClassName("aqua-slide")

        for (i = 0; i < aqua_slides.length; i++) {
            if (aqua_slides[i].id.toString().indexOf("dot") == -1) {
                if (!$(aqua_slides[i]).hasClass("active")) {
                    $("#" + aqua_slides[i].id.toString()).animate({ right: 1500 }, 500)
                }
            }
        }
    }

    function setSlidesTimer() {
        slides_timer = setInterval(function () {
            if (slideIndex > 4) {
                slideIndex = 1
            }
            showSlides(slideIndex)
        }, 15000)
    }

    function callSlide(n) {
        clearInterval(slides_timer)
        showSlides(n)
        setSlidesTimer()
    }

    function showSlides(num) {
        var i
        var dots = document.getElementsByClassName("dot")
        var aqua_slides = document.getElementsByClassName("aqua-slide")

        for (i = 0; i < dots.length; i++) {
            if ($(dots[i]).hasClass("active-dot")) {
                $(dots[i]).removeClass("active-dot")
                $(dots[num - 1]).addClass("active-dot")
                break
            }
        }

        for (i = 0; i < aqua_slides.length; i++) {
            if ($(aqua_slides[i]).hasClass("active")) {
                if (aqua_slides[i].id.toString().indexOf(num.toString()) == -1) {
                    $(aqua_slides[i]).removeClass("active")
                    $("#" + aqua_slides[i].id.toString()).animate({ right: 1500 }, 500)
                    $("#aqua-slide-" + (num).toString()).addClass("active")
                    $("#aqua-slide-" + (num).toString()).show().css({ right: -($("#aqua-slide-" + (num).toString()).width()) }).animate({ right: 0 })
                    break
                }
            }
        }

        slideIndex = num
        slideIndex += 1
    }

    $("#dot-1").click(function () {
        callSlide(1)
    });
    $("#dot-2").click(function () {
        callSlide(2)
    });
    $("#dot-3").click(function () {
        callSlide(3)
    });
    $("#dot-4").click(function () {
        callSlide(4)
    });
});