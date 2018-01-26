/* JQUERY FOR MENU FUNCTION */
(function ($) {

    // Menu filer
    $("button.menufilter").click(function () {
      $("button.menufilter").removeClass('active');
      $(this).addClass('active');
      var selectedFilter = $(this).data("filter");
    //  $("#menu-wrapper").fadeTo(100, 0);

      $(".menu-restaurant").fadeOut();

      setTimeout(function() {
        $(selectedFilter).slideDown();
        //$("#menu-wrapper").fadeTo(300, 1);
      }, 300);
    });
})(jQuery);

$(document).ready(function(){
        $(".menu-restaurant").hide();
});