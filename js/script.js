function move(buttonNumber) {
	var button = document.getElementById(buttonNumber);
	if (button.className == "button enabled") {
	  button.className = "button disabled";
	  button.lastElementChild.className = "fa fa-times";
	} else {
	    button.className  = "button enabled";
	    button.lastElementChild.className = "fa fa-check";
	  }
}
function hide() {
  if ($('#button2').hasClass("disabled")) {
    $('#show_hide').slideUp();
    var	fullScreen = document.documentElement.clientHeight + "px";
	  document.getElementsByClassName("wrapper")[0].style.height = fullScreen;
  } else {
      $('#show_hide').slideDown(); 
    }
  }
function select(a, b, c) {
	if (document.getElementsByClassName("green_check")[a].style.display == "block"){
  	document.getElementsByClassName("green_check")[a].style.display = "none"
  } else{
  document.getElementsByClassName("green_check")[a].style.display = "block";
  document.getElementsByClassName("green_check")[b].style.display = "none";
  document.getElementsByClassName("green_check")[c].style.display = "none";
  } 
}