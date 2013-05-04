$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */

	/* Changing thedefault easing effect - will affect the slideUp/slideDown methods: */
	$.easing.def = "easeOutBounce";

	/* Binding a click event handler to the links: */
	$('li.button a').click(function(e){
	
		/* Finding the drop down list that corresponds to the current section: */
		var dropdown1 = $(this).parent().next();
		
		/* Closing all other drop down sections, except the current one */
		$('.dropdown1').not(dropdown1).slideUp('fast');
		dropdown1.slideToggle('fast');
		
		/* Preventing the default event (which would be to navigate the browser to the link's address) */
		e.preventDefault();
	})
	
});
