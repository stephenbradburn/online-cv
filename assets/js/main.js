jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });

    // Select elements with the class "project-title" and check their text content
    $('.project-title').each(function() {
        if ($(this).text() === "Working in Aerospace, Avionics, Defence, Pharmaceutical, Automotive, Component and Equipment Manufacturing") {
            $(this).css('font-style', 'italic');
        }
    });

});
