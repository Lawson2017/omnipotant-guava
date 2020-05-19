//Section 1 jQuery

$(function() {
$(function() {

	//pass in functions as the 3rd and final parameter. this can be used to time certain animations.
	//you can only time your animations using the sequence of others. use delays to have them happen in between (simply put them in front of the fadeTo with dot notation)
// 	$(".red-box").fadeTo(1000,0,function(){
// 		$(".green-box").slideUp(1000,0,function(){
// 			$(".blue-box").fadeTo(1000,0)
// 		})
// 		$(".green-box").slideDown(1000.0)
// 	})
// });

	//need quotations for variable and value assignments for this jQuery application
	//+= increases the margin by whatever value is already given.
	$(".blue-box").animate({
		//2nd parameter in this object method can be the animation time.
		//linear will make the 'margin-left' assignment change occur linearly over the time of the animation. some very fast math on the browser's behalf!
		"margin-left": "+=200px",
	}, 1000, "linear");

	$(".blue-box").animate({
		"margin-left": "-=200px",
	}, 1000, "linear");	

	// $(".blue-box").animate({
	// 	"margin-left": "200px",
	// 	"opacity": "0",
	// 	"height": "50px",
	// 	"width": "50px",
	// 	"margin-top": "25px",
	//   }, 1000, "linear");
	// //cannot use colors for these animations
	// //be mindful of screen sizes/non-existant media queries when changing these font-sizes
	// $("p").animate({
	// 	"font-size": "+=10px",
	// }, 1000, "linear");

	// $(".lightbox").delay(500).fadeIn(1000);


});