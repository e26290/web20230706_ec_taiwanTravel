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
      recommend_cards_data: [
        {
            src_1: "public/images/img-col-5-1.png",
            title_1: "九份山城",
            subtitle_1: "隱身山城裡的祕密風景",
            content_1: "當年金瓜石礦區為了因應地形而設置各種運輸工具，包括輕便台車道、空中索道、斜坡索道等設施，以利運送礦產及物資；位於勸濟堂與十三層選礦場遺址間的「六坑斜坡索道」，是目前保存較為完整的索道遺跡。",
            time_1: 30,
            city_1: "新北市",
            area_1: "九份區",
            tags_1: ["老街漫遊","山明水秀"],
            src_2: "public/images/img-col-5-2.png",
            title_2: "鹿港老街",
            subtitle_2: "舊時代的熱鬧繁華街道",
            content_2: "鹿港繁盛時碼頭區的主幹─舊街，即今之埔頭、瑤林、大有三條街道，曲折的紅磚巷道兩旁林立著重新整修過的舊式店屋，其奧妙的內部格局和舊式外觀耐人尋味。",
            time_2: 90,
            city_2: "彰化縣",
            area_2: "鹿港鎮",
            tags_2: ["老街漫遊","古蹟巡禮"]
        }
      ],
    },
});