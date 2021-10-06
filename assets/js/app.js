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