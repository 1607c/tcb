/**
 * Created by Administrator on 2017/3/20 0020.
 */
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});

var swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 4,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 1,
    freeMode: true
});

