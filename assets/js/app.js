


$(window).scroll(function() {
  
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel'),
      $nav = $('nav');

  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
      $nav.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
      $nav.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();


function codaToggleClass() {
  $('html').toggleClass('overflow-hidden');
  $('.main-content').toggleClass('blur');
};

/* Pop-up window script */
function stopEmbedVideo() {
  $('iframe').each(function() {
       var videoSrc = $(this).attr('src');
       $(this).attr('src','');
       $(this).attr('src', videoSrc);
   });
}

$('.pop-up-btn').on('click', function(e) {
   e.preventDefault();
   var popUpWindow = $(this).attr('href');
   $(popUpWindow).toggleClass('pop-up-open');
   $("nav").toggleClass("invisible");
   if(!$(popUpWindow).hasClass('pop-up-open')){
       stopEmbedVideo();
   }
   codaToggleClass();
});

$(".close-pop-up-btn").on("click", function(e) {
  e.preventDefault();

})


if ($('.skills-bar-container').length) {
  inView('.skills-bar-container').on('enter', function (el) {
      $(el).find('.skill-bar').each(function () {
          var width = $(this).find('.skill-bar-bar').width();
          if (width < 1) {
              $(this).find('.skill-bar-bar').animate({
                  width: $(this).attr('data-percent') + '%',
              }, 1500);
              var skillPercent = $(this).attr('data-percent');
              $(this).find('.skill-bar-percent').find('.skill-count').text(skillPercent);
              $(this).find('.skill-count').each(function () {
                  $(this).prop('Counter', 0).animate({
                      Counter: $(this).text()
                  }, {
                      duration: 1500,
                      easing: 'swing',
                      step: function (now) {
                          $(this).text(Math.ceil(now));
                      }
                  });
              });
          }
      });
  });
};

  // Contact form script
  if ($('.contact-form').length) {
    $('.contact-form .input').blur(function () {
        if (this.value) {
            $(this).addClass('label-up');
        } else {
            $(this).removeClass('label-up');
        }
    });
};

$(window).on('scroll', function () {
  var scroll = $(this).scrollTop();
  if ( scroll > $(window).height() ) {
      $('.scroll-to-top').addClass('active-btn');
  } else {
      $('.scroll-to-top').removeClass('active-btn');
  }
});




