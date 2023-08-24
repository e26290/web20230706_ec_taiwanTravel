$(document).ready(function () {
    $('.slider').slick({
        centerMode: true, // 以中心式的方式顯示
        centerPadding: '1rem', // banner間距
        slidesToShow: 1, // 一次顯示幾張
        autoplay: false, // 自動輪播
        autoplaySpeed: 2000, // 輪播換圖秒數
        variableWidth: false, // 則輪播圖片的寬度會保持一致
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '1rem',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0rem',
                slidesToShow: 1
            }
            }
        ], // 用於設置響應式設計
        prevArrow: '<span class="material-symbols-outlined prev">chevron_left</span>',
        nextArrow: '<span class="material-symbols-outlined next">chevron_right</span>',
    });
    $('.responsive').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ],
        prevArrow: '<span class="material-symbols-outlined prev">chevron_left</span>',
        nextArrow: '<span class="material-symbols-outlined next">chevron_right</span>',
    });
});

new Vue ({
    el: "#app",
    data: {
        
    },
});