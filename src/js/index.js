import $ from "jquery"

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
    $(".accordion-title").click(function(e){
        var accordionitem = $(this).attr("data-tab");
        $("#"+accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

        $(this).toggleClass("active-title");
        $("#"+accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");

        $("i.fa-chevron-down",this).toggleClass("chevron-top");
        $("#"+accordionitem).parent().siblings().find(".accordion-title i.fa-chevron-down").removeClass("chevron-top");
    });

});


// accordionitem == item1
// accordionitem == item2
// accordionitem == item3
