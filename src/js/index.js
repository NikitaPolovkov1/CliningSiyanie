import $ from "jquery"
import "slick-slider"

document.addEventListener('DOMContentLoaded', function() {
    // Добавляем класс 'active' к ul.tabs и класс 'current' к первому элементу li
    var tabs = document.querySelectorAll('.tab ul.tabs');
    tabs.forEach(function(tab) {
        tab.classList.add('active');
        tab.querySelector('li').classList.add('current');
    });

    // Обрабатываем щелчок по ссылке внутри li
    var tabLinks = document.querySelectorAll('.tab ul.tabs li a');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки
            var tab = link.closest('.tab');
            var index = Array.from(link.closest('ul').children).indexOf(link.closest('li'));

            // Удаляем класс 'current' у всех li
            var lis = tab.querySelectorAll('ul.tabs > li');
            lis.forEach(function(li) {
                li.classList.remove('current');
            });

            // Добавляем класс 'current' к текущему li
            link.closest('li').classList.add('current');

            // Скрываем все div.tabs_item, кроме текущего
            var tabItems = tab.querySelectorAll('.tab_content .tabs_item');
            tabItems.forEach(function(item, idx) {
                if (idx !== index) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            });
        });
    });
});


$(document).ready(function(){

    $(".active__burger").click(function(){
        $(".mobile__menu").slideDown(500);
        $(".overlay").show();
        $(".active__burger").hide(500);
        $(".close__burger").show(500);
    });

    $(".close__burger, .overlay").click(function(){
        $(".mobile__menu").slideUp(500);
        $(".overlay").hide();
        $(".active__burger").show(500);
        $(".close__burger").hide(500);
    });


    $(".accordion-title").click(function(e){
        var accordionitem = $(this).attr("data-tab");
        $("#"+accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

        $(this).toggleClass("active-title");
        $("#"+accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");

        $("i.fa-chevron-down",this).toggleClass("chevron-top");
        $("#"+accordionitem).parent().siblings().find(".accordion-title i.fa-chevron-down").removeClass("chevron-top");
    });

    function checkScroll() {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('header__active');
        } else {
            $('header').removeClass('header__active');
        }
    }

    // Проверяем положение прокрутки при загрузке страницы
    checkScroll();

    // Проверяем положение прокрутки при каждом скролле
    $(window).scroll(function() {
        checkScroll();
    });

    $('.slider_all').slick({
        arrows:true,
        dots:false,
        slidesToShow: 4,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        responsive:[
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });


    $('.slider__reviews').slick({
        arrows:true,
        dots:false,
        slidesToShow:3,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        responsive:[
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });

    function checkWidth() {
        if ($(window).width() < 600) {
            $('.slider__service').slick({
                arrows:true,
                dots:false,
                slidesToShow:1,
                autoplay:false
            });
        }
        else{
            if ($('.slider__service').hasClass('slick-initialized')) {
                $('.slider__service').slick('unslick');
            }
        }
    }

    $(window).resize(function() {
        checkWidth();
    });

    checkWidth();

});
