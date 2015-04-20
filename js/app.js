$(document).ready(function(){

// 	var img = new Image();
// 	img.src = $('#TvDiv').css('background-image').replace(/url\(|\)$/ig, "");
// 	var bgImgWidth = img.width;
// 	var bgImgHeight = img.height;
// 	console.log(bgImgWidth);
// 	console.log(bgImgHeight);

	function questionSize(){
		var height=$(window).height();
		console.log(height);
		$(".tv").css({
			"height":(height*0.90),
			"width":(height*0.98),
		});
		var tvHeight= $(".tv").height();
		var tvWidth= $(".tv").width();
		console.log(tvWidth);
		console.log(tvHeight);
			$(".screen").css({
		        "width":(tvWidth*0.43), 
		        "height":(tvHeight*0.35),
		    });
	}


	questionSize();
	$(window).resize(questionSize);

	$(".score").hide();
	$(".start").hide();
});

