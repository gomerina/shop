$(function () {
    $.each($('input[type="tel"]'), function () {
        $(this).mask('+7 (999) 999-99-99');
    })

    $.each($('.form-group.telephone input'), function () {
        $(this).mask('999 999 99 99');
    })

    $.each($('[data-carousel]'), function () {
        $(this)
            .addClass('owl-carousel')
            .owlCarousel({
                loop: $(this).data('loop'),
                margin: $(this).data('margin'),
                nav: $(this).data('nav'),
                dots: $(this).data('dots'),
                items: $(this).data('items'),
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: (parseInt($(this).data('items')) / 3).toFixed(),
                    },
                    992: {
                        items: (parseInt($(this).data('items')) / 2).toFixed(),
                    },
                    1200: {
                        items: (parseInt($(this).data('items')) / 1.5).toFixed(),
                    },
                    1400: {
                        items: parseInt($(this).data('items')),
                    },
                }
            });
    })

    $.each($('[data-tip]'), function () {
        tippy(this, {
            allowHTML: true,
            content: $(this).data('tip'),
        });
    })

    $('#fixed_header').toggleClass('scroll', $(this).scrollTop() > $('header').height())
})

$(window).scroll(function () {
    $('#fixed_header').toggleClass('scroll', $(this).scrollTop() > $('header').height())
});

$(document).on('click', '[data-carousel-prev]', function () {
    $($(this).data('carousel-prev')).trigger('prev.owl.carousel');
});

$(document).on('click', '[data-carousel-next]', function () {
    $($(this).data('carousel-next')).trigger('next.owl.carousel');
});

$(document).on('click', '[data-tab]', function () {
    var tab = $(this).data('tab'),
        container = $(this).data('container');

    $.each($(container).find('.tab_link'), function () {
        $(this).removeClass('active');
    });

    $.each($(container).find('.tab'), function () {
        $(this).removeClass('active');
    });

    $('[data-tab="' + tab + '"]').addClass('active');
    $(tab).addClass('active');
});

$(document).on('click', '[data-modal]', function (event) {
    event.preventDefault();

    $(this).toggleClass('active')

    const modal = $($(this).data('modal'))

    if (modal.hasClass('active')) {
        modal.fadeOut()
    } else {
        modal.fadeIn()
    }

    setTimeout(function () {
        modal.toggleClass('active');
    }, 500)
});

$(document).on('click', '[data-close-modal]', function (event) {
    event.preventDefault();

    const modal = $($(this).data('modal'))

    modal.fadeOut()

    setTimeout(function () {
        modal.removeClass('active');
    }, 500)
});

$(document).on('click', '[data-open-modal]', function (event) {
    event.preventDefault();

    const modal = $($(this).data('modal'))

    modal.fadeIn()

    setTimeout(function () {
        modal.removeClass('active');
    }, 500)
});

$(document).on('click', '[data-scroll-to]', function (event) {
    event.preventDefault();

    $('body,html').animate({scrollTop: $(this).data('scroll-to')}, 400);
})

$(document).on('click', '.custom-select .selected', function (event) {
    event.preventDefault();

    const dropdown = $(this).closest('.values').find('.dropdown'),
        icon = $(this).find('.icon')

    if (dropdown.closest('.values').hasClass('active')) {
        icon.html('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 7.08331L9.99996 12.9166L4.16663 7.08331" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')
    } else {
        icon.html('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16668 12.9167L10 7.08335L15.8333 12.9167" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')
    }

    dropdown.closest('.values').toggleClass('active')
    dropdown.toggleClass('active')
})

$(document).on('click', '.custom-select .dropdown .item', function (event) {
    event.preventDefault();

    const selected = $(this).closest('.custom-select').find('.selected'),
        select = $(this).closest('.custom-select').find('select'),
        text = $(this).text()

    $.each($('.custom-select .dropdown .item'), function () {
        $(this).removeClass('select')
    })

    $(this).addClass('select')

    $.each(select.find('option'), function () {
        $(this).removeAttr('selected')
    })

    select.find('option[value="' + text + '"]').attr('selected', 'selected')

    selected.find('.text').text(text)

    selected.click();
})
