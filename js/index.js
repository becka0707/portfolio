// Mobile Menu
$(document).ready(function(){
  $('.mobile-menu').click(function(){
    $('#mobile-menu').css('transform', 'translate(0)');
  });
  $('.close-container, #mobile-menu ul li a').click(function(){
    $('#mobile-menu').css('transform', 'translate(100%)');
  });
});

// Parallax effect
function parallax() {
	var windowScroll = $(window).scrollTop();

	$('.parallax-bg').css('background-position','center '+(windowScroll/3)+'px');
}

$(window).scroll(function() {
	parallax();
});

// Meny Scroll
$(document).scroll(function() {
  if ($(document).scrollTop() >= 100) {
	$('.custom-nav').addClass('scrolled');
  } else {
	$('.custom-nav').removeClass('scrolled');
  }
});

// Meny Hover
$(".custom-nav ul li").hover(function() {
    $(this).siblings().addClass("menu-color");
}, function() {
    $(this).siblings().removeClass("menu-color");
});

// Scroll into View
function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// Experience and Education Section Animation
if (window.matchMedia('(min-width: 1025px)').matches) {
  var firstScroll = false;
  var num = 2;
  var itemMilestone = $('.experience > .e-anim');

  $(window).scroll(function(){
    if(isScrolledIntoView($('#experience-and-education .headline')) && !firstScroll){
      $(".experience > .headline:first-child").addClass('e-bottom-open');
      test();
    }
  });

  function test(){
    var animLoop = setInterval(function(){
      $(".experience > .e-anim:nth-child("+num+")").addClass('e-bottom-open');
      $(".experience > .e-anim:nth-child("+num+") > .line-milestone-right").addClass('right-dot');
      $(".experience > .e-anim:nth-child("+num+") > .line-milestone-left").addClass('left-dot');
      $(".experience > .e-anim:nth-child("+num+") > .left-milestone > p").addClass('e-left-open');
      $(".experience > .e-anim:nth-child("+num+") > .right-milestone > p").addClass('e-right-open');
      num++;
      if(num === 9){
        myStopFunction();
      }
    },500);

    function myStopFunction() {
      clearInterval(animLoop);
    }
    
    firstScroll = true; 
  }

  // Portfolio
  var firstScroll_one = false;
  $(window).scroll(function(){


    if(isScrolledIntoView($('#portfolio .headline')) && !firstScroll_one){
      setTimeout(function(){
        $('.anim-left').parent().parent().addClass('left-portfolio'); 
        $('.anim-right').parent().parent().addClass('right-portfolio');
        $('.slick-slide').addClass('opacity-portfolio');
        setTimeout(function(){
          $('.anim-left').parent().parent().removeClass('left-portfolio'); 
          $('.anim-right').parent().parent().removeClass('right-portfolio'); 
        },700); 
      },200);

      firstScroll_one = true;
    }
  });

  // About me
  var firstScroll_two = false;

  if(isScrolledIntoView($('#portfolio .headline')) && !firstScroll_two){
    $('.my-pic').addClass('about-me-left-open');
    
    firstScroll_two = true;
  }
}

/* Home letters hover */
if (window.matchMedia('(min-width: 1024px)').matches) {
 ( function( $ ) {

    $.fn.spanLetters = function() {

        this.each( function() {   
            
            var words, i, text;
          
            words = $( this ).text().split( '' );

            for ( i = 0; i in words; i++ ) {
                words[i] = '<span class="sl' + ( i + 1 ) + ' span-letter">' + words[i] + '</span>'
            };

            text = words.join( '' );

            $( this ).html( text );
        })
    }
  }( jQuery ));

  $target = $( '.my-name h1' );
  $target.spanLetters();

  var letter = document.querySelectorAll( '.span-letter');

  for(var i = 0; i < letter.length; i++){
    letter[i].addEventListener( 'mouseover', function() {
      this.classList.add( 'animate' );
    });
    letter[i].addEventListener( 'animationend', function() {
      this.classList.remove( 'animate' );
    });
  }

  $('.sl8').css('width', '20px');
}



// Social hover
$('#social a').hover(function(){
  $('#social').css({'transform': 'translatex(-8px)', 'padding-right': '15px', 'background': '#232323', 'transition': '.25s'});
}, function(){
  $('#social').css({'transform': 'translatex(-14px)', 'padding-right': '10px', 'background': 'rgba(0, 0, 0, .5)'});
});

var firstScroll3 = false;

$(window).scroll(function(){
  if(isScrolledIntoView($('#footer .headline')) && !firstScroll3){
    $('#social').css({'transform': 'translatex(-55px)', 'padding-right': '15px', 'background': '#232323', 'transition': '.25s'});
    firstScroll3 = true;
  }
  if(!(isScrolledIntoView($('#footer .headline'))) && firstScroll3){
    $('#social').css({'transform': 'translatex(-14px)', 'padding-right': '10px', 'background': 'rgba(0, 0, 0, .5)'});
    firstScroll3 = false;
  }
});