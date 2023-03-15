jQuery(function () {
    // init Swiper:
    const swiper = new Swiper(".js__swiper", {
        loop: false,
        slidesPerView: 1,
        allowTouchMove: false,

        // If we need pagination
        pagination: {
            type: 'fraction',
            el: ".js__swiper-pagination",
        },

        // Navigation arrows
        navigation: {
            nextEl: ".js__next",
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: ".js__swiper-scrollbar",
        // },
    });


    // Обработка формы
    jQuery('.js__form').on('submit', function(e) {
        e.preventDefault();

        const form = jQuery(this);
        let data = form.serializeArray();
        console.log('Form data: ', data);
        
        newHTML = '<div class="answer-block">';

        data.forEach(function(name, idx, arr) {
            newHTML += '<p>' + name.name + ' == ' + (name.value == 1 ? 'Да' : 'Нет') + '</p>';
        })

        newHTML += '</div>';

        console.log(newHTML);

        jQuery('.js__form > .container').html(newHTML);
    })
});
