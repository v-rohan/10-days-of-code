// animation on scroll
$(function(){

    window.sr = ScrollReveal();
  
    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
        $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }
  
    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });
});

$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('.split-pane').offset().top }, 'slow');
        return false;
    });
});