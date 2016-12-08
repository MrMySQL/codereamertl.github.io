jQuery(document).ready(function () {
    jQuery('.js-disactiveCareerProf').hover(function () {
        jQuery(this).siblings().stop().addClass('is-disactive')
    }, function () {
        jQuery(this).siblings().stop().removeClass('is-disactive')
    });
});

jQuery(document).ready(function () {
    jQuery('.js-flexsliderResponse').flexslider({
        animation: 'fade',
        touch: true,
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: ''
    });
});
