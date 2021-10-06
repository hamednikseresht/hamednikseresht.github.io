/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

		$('#mobile_nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

// variables
const mobile_menu_button = document.querySelector("#mobile_menu_button");
const mobile_menu = document.querySelector("#mobile_menu")

// ready whole document
document.addEventListener("DOMContentLoaded" , ()=>{
	mobile_menu_button.addEventListener("click" , mobile_menu_button_click);
});

// check if menu open and cursor clicked outside hide menu
document.addEventListener('click' , (e)=>{
	if(
		(! mobile_menu.classList.contains("toggle_menu")) &&
		(! e.target.classList.contains("mobile_menu_item_link")) && 
		(e.target.id != "mobile_menu_button")
	){
		mobile_menu.classList.add("toggle_menu")	
	}
});	

// functions
const mobile_menu_button_click = (e) =>{
	mobile_menu.classList.toggle("toggle_menu");
}