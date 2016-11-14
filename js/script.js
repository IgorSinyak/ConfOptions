var BUTTON_SELECTOR = ".button";
var BUTTON_SYMBOL_SELECTOR = ".fa"
var CHECK_SYMBOL = "fa-check";
var TIMES_SYMBOL = "fa-times";
var WIDGET_N2_SELECTOR = "#widget_2";
var SLIDE_BLOCK_SELECTOR = "#show_hide";
var MENU_SELECTOR = ".selector"

$(document).ready(function () {
  $(BUTTON_SELECTOR).click(function () {
    var button = $(this);
    var check = button.children(BUTTON_SYMBOL_SELECTOR);
    var widget = button.parent().parent();
    if (button.hasClass("disabled")) {
      button.removeClass("disabled").addClass("enabled");
      check.removeClass(TIMES_SYMBOL).addClass(CHECK_SYMBOL);
      if (widget.is(WIDGET_N2_SELECTOR)) {
        $(SLIDE_BLOCK_SELECTOR).slideDown();
      }
    } else { 
      button.removeClass("enabled").addClass("disabled");
      check.removeClass(CHECK_SYMBOL).addClass(TIMES_SYMBOL);
        if (widget.is(WIDGET_N2_SELECTOR)) {
          $(SLIDE_BLOCK_SELECTOR).slideUp();
        }
      }
    });
  $(MENU_SELECTOR).click(function (){
    if ($(this).hasClass("active")){
      $(this).removeClass("active");
      $(this).children().css("display", "none");
    } else {
      $(MENU_SELECTOR).children().css("display", "none");
      $(MENU_SELECTOR).removeClass("active");
      $(this).children().css("display", "block");
      $(this).addClass("active");
    }
    });
    $(MENU_SELECTOR).hover(function (){
      if (!$(this).hasClass("active")){
      $(this).children().css("display", "block");
    }},
    function () {
      if (!$(this).hasClass("active")){
      $(this).children().css("display", "none");
    }});
});

