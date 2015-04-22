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

	function quizQuestions(question, answers, correctAnswer){
		this.question = question;
		this.answers= answers;
		this.correctAnswer= correctAnswer;
	}

	var questionOne = new quizQuestions("What was the name of Mr. Burns' prized teddy bear?",["Bobo", "Yanci", "Sherman", "Teddy"],"Bobo");
	var questionTwo = new quizQuestions("What Ivy League school did Mr. Burns attend?",["Harvard", "Princeton", "Yale", "Brown"],'Yale');
	var questionThree = new quizQuestions("Who Shot Mr. Burns?", ['Smithers', 'Homer', 'Abe', 'Maggie'],'Maggie');
	var questionFour = new quizQuestions("Which of the following garments does he NOT own?", ['Grizzly bear Underwear', 'Gopher Loafers', 'Albino Rhino Chinos', 'Gorilla chest vest'],'Albino Rhino Chinos');
	var questionFive = new quizQuestions("Which of the following has guarded Burns Manor?", ['Robotic Richard Simmons','the Ghost of Howard Taft', 'Guard llama','Stay Puft Marshmallow Man','Robo Cop'],'Robotic Richard Simmons');
		
	var questionList=[questionOne, questionTwo, questionThree, questionFour, questionFive];	

	$("#submitButton").click(function(){
		var count = 0;
		var answerList = document.getElementsByName("answer");
		for (var i=0, len=answerList.length; i<len; ++i)
			if (answerList[i].checked){
				var answer=answerList[i].value;
				console.log(answer);
				if (answer===questionList[count].correctAnswer){
					$(".firstQuestion").hide();
					$(".correct").show();
					$(".correct").fadeOut(2000);
					count = (count +1);
					$(".question").replaceWith(questionList[count].question);
					$("#answers1").replaceWith(questionList[count].answers[0]);
					$("#answers2").replaceWith(questionList[count].answers[1]);
					$("#answers3").replaceWith(questionList[count].answers[2]);
					$("#answers4").replaceWith(questionList[count].answers[3]);
					$(".firstQuestion").fadeIn(2000);
				}
				else{
					$(".firstQuestion").hide();
					$(".incorrect").show();
					$(".incorrect").fadeOut(2000);
				}
			} 
			else{
			}

	});

	questionSize();
	$(window).resize(questionSize);

	$("#startButton").click(function(){
		$(".firstQuestion").show();
		$(".start").hide();
	});

	$(".score").hide();
	$(".firstQuestion").hide();
	$(".incorrect").hide();
	$(".correct").hide();
});

