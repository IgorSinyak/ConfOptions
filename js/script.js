$(document).ready(function () {
    //toggler
    $(".white_box").click(function () {
      var button = $(this).parent();
      var check = button.children(".fa");
      var widget = button.parent().parent();
      if (button.hasClass("disabled")) {
        button.removeClass("disabled").addClass("enabled");
        check.removeClass("fa-times").addClass("fa-check");
        if (widget.is("#widget_2")) {
            $("#show_hide").slideDown();
          }
      } else { 
          button.removeClass("enabled").addClass("disabled");
          check.removeClass("fa-check").addClass("fa-times");
          if (widget.is("#widget_2")) {
            $("#show_hide").slideUp();
          }
      }
    });
    //selector
    //select_onClick
    $(".selector").click(function (){
      if ($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).children().css("display", "none");
      } else {
      $(".selector").children().css("display", "none");
      $(".selector").removeClass("active");
      $(this).children().css("display", "block");
      $(this).addClass("active");
      }
    });
    //display_onHover
    $(".selector").hover(function (){
      if (!$(this).hasClass("active")){
      $(this).children().css("display", "block");
    }},
    function () {
      if (!$(this).hasClass("active")){
      $(this).children().css("display", "none");
    }});
});

