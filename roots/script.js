(function($) {
  $.fn.goTo = function() {
      $('html, body').animate({
          scrollTop: $(this).offset().top + 'px'
      }, 'fast');
      return this; // for chaining...
  }
})(jQuery);


function focusOnElement(element_id) {
  $('#section_' + element_id).goTo(); // need to 'go to' this element
}
