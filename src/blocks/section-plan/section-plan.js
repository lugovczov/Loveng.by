$('.accordion-header').click(function() {
  if (!$(this).next('.accordion-body').length) {
    return;
  }
  $(this).next('.accordion-body').fadeToggle();
  $(this).toggleClass('active');
})
