const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

nextBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    
    if(counter < carouselImages.length-1){
        counter++;
    } else {
        counter = 0;
    }
    
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

})

prevBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    if(counter > 0){
        counter--;
    }else {
        counter = carouselImages.length-1;
    }
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
})


// $('.right-arrow').click(function() {
//     var currentSlide = $('.slide.active');
//     var nextSlide = currentSlide.next(".slide");

//     currentSlide.fadeOut(300).removeClass('active');
//     nextSlide.fadeIn(300).toggleClass('active').css("display", "flex");

//     if(nextSlide.length == 0){
//         $('.slide').first().fadeIn(300).addClass('active').css("display", "flex");
//     }
// });

// $('.left-arrow').click(function() {
//     var currentSlide = $('.slide.active');
//     var prevSlide = currentSlide.prev(".slide");

//     currentSlide.fadeOut(300).removeClass('active');
//     prevSlide.fadeIn(300).addClass('active').css("display", "flex");

//     if(prevSlide.length == 0) {
//         $('.slide').last().fadeIn(300).addClass('active').css("display", "flex");

//     }
// })