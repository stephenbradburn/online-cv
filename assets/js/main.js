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

});

let italicText = document.QuerySelector(".project-title");
if(italicText.textContent == "Working in Aerospace, Avionics, Defence, Pharmaceutical, Automotive, Component and Equipment
               Manufacturing")
    italicText.style.fontStyle = 'italic';
}
