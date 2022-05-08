// const CARDS_CONTAINER = [...document.querySelectorAll('.cards')];
// const CARD = document.getElementById('nb2002rc-card');

// const LEFT_BUTTON = document.getElementById('cards-button-left');
// const RIGHT_BUTTON = document.getElementById('cards-button-right');

const COVER = document.getElementById('cover');

const IMG_PATH = '/img/';

const BACKGROUND_ARR =
    [
        `${IMG_PATH}parra_full.jpeg`,
        `${IMG_PATH}2002rc_full.jpg`,
        `${IMG_PATH}travis_dunk_full.webp`,
        `${IMG_PATH}aime_550_full.jpg`,
        `${IMG_PATH}travis_dunk_full.webp`,
        `${IMG_PATH}rich_550_full.png`,
        `${IMG_PATH}travis_dunk_full.webp`,
    ]

// let counter = 0;


const timer = 2500;

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: timer,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    navigation: {
        nextEl: ".swiper-button-right",
        prevEl: ".swiper-button-left",
    },

});

swiper.on('slideChange', function () {
    document.getElementById('slider-number').textContent = `0${this.activeIndex + 1}`;
    backgroundChange(COVER, BACKGROUND_ARR, this.activeIndex)
});


function backgroundChange(element, arr, i) {
    return element.style.backgroundImage = `url(${arr[i]})`;
}



// CARDS_CONTAINER.forEach((item, i) => {

//     RIGHT_BUTTON.addEventListener('click', () => {

//         COVER.style.backgroundImage = `url(${BACKGROUND_ARR[counter]})`;
//         if (counter < BACKGROUND_ARR.length - 1) {
//             return counter++;
//         }

//         return counter = 0;
//     });

//     LEFT_BUTTON.addEventListener('click', () => {
//         COVER.style.backgroundImage = `url(${BACKGROUND_ARR[counter]})`;
//         if (counter > 0) {
//             return counter--;
//         }

//         return counter = BACKGROUND_ARR.length - 1;
//     });
// })



