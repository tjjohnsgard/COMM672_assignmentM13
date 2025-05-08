$(document).ready(function() {
    function openModal(modalId) {
        $('#' + modalId).fadeIn();
    }
    function closeModal() {
        $('.modal').fadeOut();
    }
    $('.about-block a').click(function(e) {
        e.preventDefault();
        var modalId = $(this).attr('href').substring(1);
        openModal(modalId + '-modal');
    });
    $('.modal .close-btn').click(function(e) {
        e.preventDefault();
        closeModal();
    });
    $(window).click(function(e) {
        if ($('.modal').is(':visible') && $(e.target).hasClass('modal')) {
            closeModal();
        }
    });
});