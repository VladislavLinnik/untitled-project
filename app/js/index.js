$(document).ready(function(){
    
    // toggle header menu
    $( '.js-toggleMenu' ).click( function() {
        
        if ( $( '#menu' ).is( ':hidden' ) ) {
            $( '#menu' ).show('slideToggle').addClass('isVisible').css('display', 'flex');
            $(this).addClass('on');
        } else {
            $( '#menu' ).hide('slideToggle');
            $(this).removeClass('on');
        }
    });



});