var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    grid: {
        rows: 2,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        220: {
            slidesPerView: 1,
            grid: {
                rows: 2,
            },
        },

        675: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },

        1024: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },

        1440: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },

        1441: {
            slidesPerView: 4,
            grid: {
                rows: 2,
            },
        },
    },
});