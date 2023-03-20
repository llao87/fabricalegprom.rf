jQuery(function () {
    // init burger manu
    jQuery(".js__burger").on("click", function () {
        jQuery(this).find(".main-menu").stop().slideToggle(600);
    });

    jQuery('.js__about-project').on("click", function () {
        jQuery(this).next(".about").stop().slideToggle(600);
    });
    
    // init EXPERTS Swiper:
    // const $expertsThumb = new Swiper(".experts-slider-thumb .swiper", {
    //     loop: true,
    //     slidesPerView: 5,
    //     navigation: false,
    //     slidesOffsetBefore: 900,
    //     initialSlide: 3,
    //     loopedSlides: 4,
    //     watchSlidesProgress: true,
    // });

    // const $experts = new Swiper(".experts-slider .swiper", {
    //     loop: true,
    //     slidesPerView: 1,
    //     initialSlide: 3,
    //     // Navigation arrows
    //     navigation: {
    //         prevEl: ".experts-slider .prev",
    //         nextEl: ".experts-slider .next",
    //     },
    //     thumbs: {
    //         swiper: $expertsThumb,
    //     },
    // });

    $(".experts-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: ".experts-slider-thumb",
        slickGoTo: 3,
    });
    $(".experts-slider-thumb").slick({
        infinite: true,
        slidesToShow: 5,
        // initialSlide: 2,
        slidesToScroll: 1,
        asNavFor: ".experts-slider",
        dots: false,
        centerMode: true,
        focusOnSelect: false,
        draggable: false,
        centerPadding: "0 0 21%",
        variableWidth: true,
    });

    // Обработка формы
    // jQuery(".js__form").on("submit", function (e) {
    //     e.preventDefault();
    //     const form = jQuery(this);
    //     let data = form.serializeArray();
    //     console.log("Form data: ", data);
    //     newHTML = '<div class="answer-block">';

    //     data.forEach(function (name, idx, arr) {
    //         newHTML +=
    //             "<p>" +
    //             name.name +
    //             " == " +
    //             (name.value == 1 ? "Да" : "Нет") +
    //             "</p>";
    //     });

    //     newHTML += "</div>";
    //     console.log(newHTML);
    //     jQuery(".js__form > .container").html(newHTML);
    // });

    // инициализация раскрывающихся списков
    jQuery(".js__collapse").each(function (index) {
        let list = jQuery(this).next(".overflow-wrap").find(".list"),
            maxHeight = list.height(),
            minHeight = list.find(".item:first-child").height();

        console.log(list);
        list.css({ height: minHeight });

        jQuery(this).on("click", function () {
            if (list.hasClass("active")) {
                jQuery(this).removeClass("active");
                list.stop().animate({ height: minHeight }, 600, function () {
                    jQuery(this).removeClass("active");
                });
            } else {
                jQuery(this).addClass("active");
                list.stop()
                    .animate({ height: maxHeight }, 600, function () {
                        jQuery(this).addClass("active");
                    })
                    .addClass("active");
            }
        });
    });

    // набегающие числа
    function outNum(num, step, precision, time, elem) {
        let e = document.querySelector(elem);
        n = 0;
        let t = Math.round(time / (num / step));
        let intervals = [];
        intervals[elem] = setInterval(() => {
            n = n + step;
            if (n >= num) {
                clearInterval(intervals[elem]);
            }
            e.innerHTML = n.toFixed(precision);
        }, t);
    }

    // инициализация набегающих цифр (НЕ РАБОТАЕТ)
    // jQuery(".js__digit").each(function () {
    //     let elem = jQuery(this),
    //         max = elem.data("max"),
    //         step = elem.data("step"),
    //         precision = elem.data("precision"),
    //         time = elem.data("time"),
    //         id = "#" + elem.attr("id");

    //     console.log(max, " ", step, " ", precision, " ", time, " ", id);

    // outNum(max, step, precision, time, id);
    // });

    // переключние профессий
    jQuery(".js__prof").on("click", function () {
        const prof = jQuery(this);

        if (!prof.hasClass("active")) {
            jQuery(".js__prof").removeClass("active");
            prof.addClass("active");
        }
    });

    // инициализация разворачивания простых списков
    jQuery(".js__collapse-list").on("click", function () {
        let elem = jQuery(this);

        jQuery(".js__collapse-list").next(".list").slideUp();

        if (elem.hasClass("active")) {
            jQuery(".js__collapse-list").removeClass("active");
        } else {
            jQuery(".js__collapse-list").removeClass("active");
            elem.addClass("active").next(".list").slideDown();
        }
    });
});
