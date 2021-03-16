import ready from 'Utils/documentReady.js';

ready(function () {
  $("#openSidebar").click(function () {
    $("#sidebar").animate({width: 'toggle'});
    $("body").css("overflow", "hidden");
  });

  $("#closeSidebar").click(function () {
    $("#sidebar").animate({width: 'toggle'});
    $("body").css("overflow", "auto");
  });

  $("#sidebar a").click(function () {
    $("#sidebar").animate({width: 'toggle'});
    $("body").css("overflow", "auto");
  });
})
