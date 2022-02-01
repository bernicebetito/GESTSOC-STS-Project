$(document).ready(function () {
    var slideIndex = 2
    var slides_timer
    setSlidesTimer()

    function setSlidesTimer() {
        slides_timer = setInterval(function () {
            if (slideIndex > 4) {
                slideIndex = 1
            }
            showSlides(slideIndex)
        }, 5000)
    }

    function callSlide(n) {
        clearInterval(slides_timer)
        showSlides(n)
        setSlidesTimer()
    }

    function showSlides(num) {
        var i
        var dots = document.getElementsByClassName("dot")
        var stock_slides = document.getElementsByClassName("stock-slides")

        for (i = 0; i < dots.length; i++) {
            if ($(dots[i]).hasClass("active")) {
                $(dots[i]).removeClass("active")
                $(dots[num - 1]).addClass("active")
                break
            }
        }

        for (i = 0; i < stock_slides.length; i++) {
            if ($(stock_slides[i]).hasClass("active")) {
                if (stock_slides[i].id.toString().indexOf(num.toString()) == -1) {
                    $(stock_slides[i]).removeClass("active")
                    $("#" + stock_slides[i].id.toString()).animate({ right: 500 }, 500)
                    $("#stock-slide-" + (num).toString()).addClass("active")
                    $("#stock-slide-" + (num).toString()).show().css({ right: -($("#stock-slide-" + (num).toString()).width()) }).animate({ right: 0 })
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