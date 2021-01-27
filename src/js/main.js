import '../scss/style.scss';
import '../index.html';
import $ from 'jquery';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.video__slider', {
    slidesPerView: 1,
    spaceBetween: 66,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            spaceBetween: 20
        },
        580: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        810: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1110: {
            slidesPerView: 2,
            spaceBetween: 66,
        },
    }

});