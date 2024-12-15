VanillaTilt.init(document.querySelectorAll(".tilt"));

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 3
        },

        1024: {
            slidesPerView: 4
        },

        1280: {
            slidesPerView: 5
        }
    },
    loop: true,
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});