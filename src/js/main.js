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

document.addEventListener("DOMContentLoaded", function () {

    console.log('%c Developed By', 'color: #4f46e5; font-size: 16px; font-weight: bold; padding: 5px');

    console.log(`
		'     ____          _      _                     _     _        ___
		'    / ___|___   __| | ___| |__  _   _ _ __ ___ | |__ | | ___  |_ _|_ __   ___
		'   | |   / _ \\ / _\` |/ _ \\ '_ \\| | | | '_ \` _ \\| '_ \\| |/ _ \\  | || '_ \\ / __|
		'   | |__| (_) | (_| |  __/ |_) | |_| | | | | | | |_) | |  __/  | || | | | (__ _
		'    \\____\\___/ \\__,_|\\___|_.__/ \\__,_|_| |_| |_|_.__/|_|\\___| |___|_| |_|\\___(_)
		'
	`)

})