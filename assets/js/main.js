jQuery(document).ready(function($) {
    // Set initial width to 0 for elements with class "level-bar-inner"
    $('.level-bar-inner').css('width', '0');

    // Animate width of elements with class "level-bar-inner" on window load
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
        var textContent = $(this).text().trim(); // Trim any leading/trailing whitespace
        if (textContent === "Working in Aerospace, Avionics, Defence, Pharmaceutical, Automotive, Component and Equipment Manufacturing") {
            $(this).css('font-style', 'italic');
        }
    });
});
