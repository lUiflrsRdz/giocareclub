jQuery('document').ready(function($){

  var menuBtn = $('.menu-icon'),
                                aboutBtn = $('.navigation ul'),
                                tallerBtn = $('.navigation ul'),
                                libreriaBtn = $('.navigation ul'),
                                contactoBtn = $('.navigation ul'),

      menu = $('.navigation ul');

      menuBtn.click(function (){

        if(menu.hasClass('show')){

          menu.removeClass('show');
        }else{
          menu.addClass('show');
      }
    });

    aboutBtn.click(function (){

          if(menu.hasClass('show')){

            menu.removeClass('show');
                                    }
    });
    tallerBtn.click(function (){

          if(menu.hasClass('show')){

            menu.removeClass('show');
                                    }
    });
    libreriaBtn.click(function (){

          if(menu.hasClass('show')){

            menu.removeClass('show');
                                    }
    });
    contactoBtn.click(function (){

          if(menu.hasClass('show')){

            menu.removeClass('show');
                                    }
    });

});
