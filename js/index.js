$(function () {
    var slideNow = 1;
    var slideCount = $(".specialists__wrapper").children().length;
    var slideTime = 2000;

    setInterval(nextSlide, slideTime);

    function nextSlide() {
        if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
            $(".specialists__button").removeClass("specialists__button_active");
            $(".specialists__wrapper").css({
                transform: "translate(0,0)",
                "-o-transform": "translate(0,0)",
                "-webkit-transform": "translate(0,0)",
            });
            slideNow = 1;
            $(`.specialists__button:eq(${slideNow - 1})`).toggleClass(
                "specialists__button_active"
            );
        } else {
            $(".specialists__button").removeClass("specialists__button_active");
            var translateWith = -$(".specialists__img").width() * slideNow;
            $(".specialists__wrapper").css({
                transform: `translate(${translateWith}px,0)`,
                "-o-transform": `translate(${translateWith}px,0)`,
                "-webkit-transform": `translate(${translateWith}px,0)`,
            });
            slideNow++;
            $(`.specialists__button:eq(${slideNow - 1})`).toggleClass(
                "specialists__button_active"
            );
        }
    }
});
