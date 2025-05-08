$(document).ready(function() {
    $('.accordion-content').hide();
    $('.accordion-header').addClass('accordion-toggle');
    $('.accordion-toggle').click(function() {
        $('.accordion-content').not($(this).next()).slideUp();
        $(this).next('.accordion-content').slideToggle();
        $('.accordion-toggle').not($(this)).removeClass('active');
        $(this).toggleClass('active');
    });
    var backToTopBtn = $('#backToTopBtn');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            backToTopBtn.fadeIn();
        } else {
            backToTopBtn.fadeOut(); 
        }
    });
    backToTopBtn.click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });
});