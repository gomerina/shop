$(function () {
    $('#price_slider').ionRangeSlider({
        type: 'double',
        min: 0,
        max: 10000,
        from: $('#price_from').val(),
        to: $('#price_to').val(),
        drag_interval: false,
        min_interval: null,
        max_interval: null,
        onChange: function (data) {
            $('#price_from').val(data.from)
            $('#price_to').val(data.to)
        }
    })
})

$(document).on('click', '.open-items', function () {
    const icon = $(this).find('.icon'),
        block = $(this).closest('.block').find('.items');

    if (block.css('display') === 'block') {
        block.hide()

        icon.html('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8334 7.08321L10.0001 12.9165L4.16675 7.08321" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')
    } else {
        block.show()

        icon.html('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16658 12.9167L9.99992 7.08334L15.8333 12.9167" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')
    }
})

$(document).on('click', '.tags-list .show-more', function () {
    $('.tags-list li').removeClass('hidden')

    $(this).addClass('hidden')
})

$(document).on('click', '.tags-list .hide-more', function () {
    var skip = true

    $.each($('.tags-list li'), function () {
        if (skip === false) {
            $(this).addClass('hidden')
        }

        if ($(this).text() === 'Еще') {
            $(this).removeClass('hidden')

            skip = false
        }
    })
})
