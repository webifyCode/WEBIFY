$(document).ready(function () {
    //show loading animation if javascript
    //allowed
    $('.loader').fadeIn('200ms');
    
    $('.loader').on('animationend', function () {
        $('#loading').fadeOut('200ms');
    });
    
    //smooth scrolling
    $("a[href*='#']:not([href='#'])").on('click', function() {
      if (this.hash.length > 0) {
        $('body, html').animate({
          scrollTop: $(this.hash).offset().top
        }, 500)
      }
    
      return false;
    
    });
});
