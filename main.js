// const CARDS_CONTAINER = [...document.querySelectorAll('.cards')];
// const CARD = document.getElementById('nb2002rc-card');

// const LEFT_BUTTON = document.getElementById('cards-button-left');
// const RIGHT_BUTTON = document.getElementById('cards-button-right');

const COVER = document.getElementById('cover');
const CONTENT_HEADER = document.getElementById('content-section-title');
const CONTENT_H1 = document.getElementById('content-section-h1');

const IMG_PATH = '/img/';

const BACKGROUND_ARR =
    [
        `${IMG_PATH}bg.jpg`,
        `${IMG_PATH}parra_full.jpeg`,
        `${IMG_PATH}2002rc_full.jpg`,
        `${IMG_PATH}travis_dunk_full.webp`,
        `${IMG_PATH}aime_550_full.jpg`,
        `${IMG_PATH}j1union_full.webp`,
        `${IMG_PATH}rich_550_full.png`,
        `${IMG_PATH}travis_dunk_full.webp`,
    ]

const text = [
    {
        header: 'Pawel • Poland',
        name: 'My Favourites Sneakers',
        content: "Website made to increase my skills with web developement,<br> and to show you what are my favourites sneakers."
    },
    {
        header: 'Nike SB • Dunk Low',
        name: 'Parra Abstract Art',
        content: "Website made to increase my skills with web developement,<br> and to show you what are my favourites sneakers."
    },
    {
        header: 'New Balance • 2002R',
        name: 'RF Rain Cloud',
        content: "Website made to increase my skills with web developement,<br> and to show you what are my favourites sneakers."
    },
    {
        header: 'Nike SB • Dunk Low',
        name: 'Travis Scott',
        content: "Website made to increase my skills with web developement,<br> and to show you what are my favourites sneakers."
    },
    {
        header: 'New Balance • 550',
        name: 'ALD White Green',
        content: ""
    },
    {
        header: 'Nike • Jordan 1',
        name: 'Union Black Toe',
        content: "Website made to increase my skills with web developement,<br> and to show you what are my favourites sneakers."
    },
    {
        header: 'New Balance • 550',
        name: 'Rich Paul',
        content: "Website made to increase my skills with web developement,<br> and to show you what are my favourites sneakers."
    },
    {
        header: 'Vans• Old Skool',
        name: 'Gum Bumper',
        content: "I love these, their are definitly one of the best shoes I ever had. Found them in Vans outlet in Calgary for like $35, but they survived quite a lot, $200 Dunks would'nt"
    },
]

const timer = 3000;


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
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
    changeText(this.activeIndex)
});


function backgroundChange(element, arr, i) {
    return element.style.backgroundImage = `url(${arr[i]})`;
}

function changeText(i) {
    CONTENT_HEADER.textContent = text[i].header;
    CONTENT_H1.textContent = text[i].name;
}


