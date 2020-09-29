$('.right-arrow').click(function() {
    var currentSlide = $('.slide.active');
    var nextSlide = currentSlide.next(".slide");

    currentSlide.fadeOut(300).removeClass('active');
    nextSlide.fadeIn(300).toggleClass('active')/*.css("display", "flex")*/;

    if(nextSlide.length == 0){
        $('.slide').first().fadeIn(300).addClass('active')/*.css("display", "flex")*/;
    }
});

$('.left-arrow').click(function() {
    var currentSlide = $('.slide.active');
    var prevSlide = currentSlide.prev(".slide");

    currentSlide.fadeOut(300).removeClass('active');
    prevSlide.fadeIn(300).addClass('active').css("display", "flex");

    if(prevSlide.length == 0) {
        $('.slide').last().fadeIn(300).addClass('active').css("display", "flex");

    }
})