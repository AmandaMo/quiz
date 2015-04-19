$(document).ready(function(){



	function Questionsize(){
		var height=document.getElementById('tvDiv').clientHeight;
		console.log(height);
		var width=document.getElementById('tvDiv').clientWidth;
		console.log(width);
			$(".question").css({
		        width:(width*0.25), 
		        height:(height*0.4),
		    });
	}


	Questionsize();

});



// font-size: 4vh;
// font-size: 4vw;
// width
// height