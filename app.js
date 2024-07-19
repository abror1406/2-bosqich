var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const wrapper = document.querySelector(".wrapper");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

wrapper.addEventListener('mouseenter', function () {
    prevButton.classList.add('active')
})
wrapper.addEventListener('mouseleave', function () {
    prevButton.classList.remove('active')
})
wrapper.addEventListener('mouseleave', function () {
    nextButton.classList.remove('active')
})
wrapper.addEventListener('mouseenter', function () {
    nextButton.classList.add('active')
})