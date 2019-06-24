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


    // sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('.header').addClass("sticky");
        }
        else{
            $('.header').removeClass("sticky");
        }
    });



    // copy buy details
    // function copybtc(el) { 
    //     var $tmp = $("<input>"); 
    //     $("body").append($tmp); 
    //     $tmp.val($(el).text()).select(); 
    //     document.execCommand("copy"); 
    //     $tmp.remove(); 
    // }


    // popup benefits
    $('.js-detailPopup').click(function(){
        $('.popup, .popup__overlay').fadeIn(400); //показываем всплывающее окно
    });
    $('.popup-close, .popup__overlay').click(function(){
        $('.popup, .popup__overlay').fadeOut(400); //скрываем всплывающее окно
    });



    // contact inputs filled
    $('.js-inputFilled').on('blur', function(){
        if ( $(this)[0].value.length >= 4 ) {
            $(this).addClass('filled');
        }
        else {
            $(this).removeClass('filled');
        }
    });



    // buy panel
    let minus = $('.amount .minus'),
        plus = $('.amount .plus'),
        amount = $('.amount .number').text();

    minus.on('click', function(){
        amount--;
        $('.amount .number').text(amount);
    });

    plus.on('click', function(){
        amount++;
        $('.amount .number').text(amount);
    });



    // header select relink
    $('.header__auth').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();

            $(this).addClass('filled');
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            window.location = $(this).attr('rel');
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });



    // custom select
    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();

            $(this).addClass('filled');
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));

            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });

});
