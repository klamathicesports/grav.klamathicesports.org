(function($) {

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
$(document).ready( function() {

  $('#kis-carousel').carousel({
      interval: 4800
  });
  $('#kis-carousel').hover(function(){
    $("#kis-carousel").carousel('pause');
  },function(){
    $("#kis-carousel").carousel('cycle');
  });

  $('#contact-modal').on('show.bs.modal', function (event) {
    var contact_email = $('#contact-email');

    if(!contact_email.val() || !contact_email.val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
      contact_email.closest('.form-group').removeClass('has-success').addClass('has-error');
      $('#contact-form').find(':submit').click();
      event.preventDefault();
    } else {
      contact_email.closest('.form-group').removeClass('has-error').addClass('has-success');
    }
  });

  $window = $(window);
  if( !device.tablet() && !device.mobile() )
  {
      var windowHeight = $window.height();
      
          $('.inherit-height').each( function() {
            $(this).css( 'height', windowHeight );
          });

          $('.vert-center').each( function() {
            $(this).css( 'padding-top', windowHeight/2 - $(this).height()/2 );
          });
      
      $window.resize( function() {
        windowHeight = $window.height();
        $('.inherit-height').each( function() {
          $(this).css( 'height', windowHeight );
        });

        $('.vert-center').each( function() {
          $(this).css( 'padding-top', windowHeight/2 - $(this).height()/2 );
        });
      });
      $('.parallax-section').each( function( index, element ) {
        $(this).addClass('fixed');
      });
      skrollr.init( { forceHeight: false } );
  }


}); // close out script
})(jQuery);

/* Create HTML5 element for IE */
document.createElement("section");