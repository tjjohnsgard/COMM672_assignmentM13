$(document).ready(function() {
    $('.accordion-content').hide();
    $('.accordion-header').addClass('accordion-toggle');
    $('.accordion-toggle').click(function() {
        $('.accordion-content').not($(this).next()).slideUp();
        $(this).next('.accordion-content').slideToggle();
        $('.accordion-toggle').not($(this)).removeClass('active');
        $(this).toggleClass('active');
    });
});