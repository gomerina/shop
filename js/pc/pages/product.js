$(function () {
    $('.full-image a').simpleLightbox({loop: true});

    $('.star-select').on({
        mouseenter: function () {
            for (var i = 1; i <= $(this).data('value'); i++) {
                $('.star-select').eq(i - 1).find('path').attr('fill', '#F4BE55')
            }
        },
        mouseleave: function () {
            $('.star-select').each(function () {
                if (!$(this).hasClass('block')) {
                    $(this).find('path').attr('fill', '#E8E8E8')
                }
            });
        }
    });
})

$(document).on('click', '.star-select', function (event) {
    event.preventDefault();

    $('.star-select').each(function () {
        $('.star-select').removeClass('block')
    })

    for (var i = 1; i <= $(this).data('value'); i++) {
        $('.star-select').eq(i - 1).find('path').attr('fill', '#F4BE55')
        $('.star-select').eq(i - 1).addClass('block')
    }

    $('#rating').val($(this).data('value'))
})

$(document).on('click', '.gallery a', function (event) {
    event.preventDefault();

    $.each($('.gallery .item'), function () {
        $(this).removeClass('active')
    })

    $(this).closest('.item').addClass('active')

    $.each($('.full-image a'), function () {
        $(this).hide()
    })

    const link = $('.full-image a[href="' + $(this).attr('href') + '"]')

    link.show()
    link.click()
})

$(document).on('click', '[data-input]', function (event) {
    event.preventDefault();

    const input = $(this).data('input'),
        value = $(this).data('value')

    $(input).val(value)
})

$(document).on('click', '.quantity-input .minus', function (event) {
    event.preventDefault();

    const input = $(this).closest('.quantity-input').find('input')

    if (parseInt(input.attr('min')) < 1) {
        return false
    }

    input.val(parseInt(input.val()) - 1)
})

$(document).on('click', '.quantity-input .plus', function (event) {
    event.preventDefault();

    const input = $(this).closest('.quantity-input').find('input')

    input.val(parseInt(input.val()) + 1)
})

function set_color(precent, color, value) {
    const input = $('#color')

    input.val(value)
    input.css('background', color)

    $('#color_modal').click()
}
