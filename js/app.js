$(document).ready(function(){

	function questionSize(){
		var height=$(window).height();
		$(".tv").css({
			"height":(height*0.90),
			"width":(height*0.98),
		});
		var tvHeight= $(".tv").height();
		var tvWidth= $(".tv").width();
			$(".screen").css({
		        "width":(tvWidth*0.43), 
		        "height":(tvHeight*0.35),
		    });
	}

	questionSize();
	$(window).resize(questionSize);

	/////Above Resizes Window Below is for the acutal quiz////////

	$(".score").hide();
	$(".firstQuestion").hide();
	$(".incorrect").hide();
	$(".correct").hide();

	var count = 0;
	var score = 0;

	var questionOneHtml = "<h3 class='question'>What is the name of Mr. Burn's prized Teddy Bear?</h3>" +
					"<ul class='answers'>"+
						"<li><input type='radio' name='answer' id='answer1' value='Bobo'><label for='answer1'>Bobo</label></li>" +
						"<li><input type='radio' name='answer' id='answer2' value='Yanci'><label for='answer2'>Yanci</label></li>" +
						"<li><input type='radio' name='answer' id='answer3' value='Sherman'><label for='answer3'>Sherman</label> </li>" +
						"<li><input type='radio' name='answer' id='answer4' value='Teddy'><label for='answer4'>Teddy</label></li>" +
					"</ul>"

	var questionTwoHtml = "<h3 class='question'>What Ivy League school did Mr. Burns attend?</h3>" +
					"<ul class='answers'>"+
						"<li><input type='radio' name='answer' id='answer1' value='Harvard'><label for='answer1'>Harvard</label></li>" +
						"<li><input type='radio' name='answer' id='answer2' value='Princeton'><label for='answer2'>Princeton</label></li>" +
						"<li><input type='radio' name='answer' id='answer3' value='Yale'><label for='answer3'>Yale</label> </li>" +
						"<li><input type='radio' name='answer' id='answer4' value='Brown'><label for='answer4'>Brown</label></li>" +
					"</ul>"

	var questionThreeHtml = "<h3 class='question'>Who Shot Mr. Burns?</h3>" +
					"<ul class='answers'>"+
						"<li><input type='radio' name='answer' id='answer1' value='Smithers'><label for='answer1'>Smithers</label></li>" +
						"<li><input type='radio' name='answer' id='answer2' value='Homer'><label for='answer2'>Homer</label></li>" +
						"<li><input type='radio' name='answer' id='answer3' value='Abe'><label for='answer3'>Abe</label> </li>" +
						"<li><input type='radio' name='answer' id='answer4' value='Maggie'><label for='answer4'>Maggie</label></li>" +
					"</ul>"
									

	var questionFourHtml = "<h3 class='question'>Which of the following garments does he NOT own?</h3>" +
					"<ul class='answers'>"+
						"<li><input type='radio' name='answer' id='answer1' value='Grizzly bear Underwear'><label for='answer1'>Grizzly bear Underwear</label></li>" +
						"<li><input type='radio' name='answer' id='answer2' value='Gopher Loafers'><label for='answer2'>Gopher Loafers</label></li>" +
						"<li><input type='radio' name='answer' id='answer3' value='Albino Rhino Chinos'><label for='answer3'>Albino Rhino Chinos</label> </li>" +
						"<li><input type='radio' name='answer' id='answer4' value='Gorilla chest vest'><label for='answer4'>Gorilla chest vest</label></li>" +
					"</ul>"

    var questionFiveHtml = "<h3 class='question'>Which of the following has guarded Burns Manor?</h3>" +
					"<ul class='answers'>"+
						"<li><input type='radio' name='answer' id='answer1' value='Robotic Richard Simmons'><label for='answer1'>Robotic Richard Simmons</label></li>" +
						"<li><input type='radio' name='answer' id='answer2' value='the Ghost of Howard Taft'><label for='answer2'>the Ghost of Howard Taft</label></li>" +
						"<li><input type='radio' name='answer' id='answer3' value='Guard llama'><label for='answer3'>Guard llama</label> </li>" +
						"<li><input type='radio' name='answer' id='answer4' value='Robo Cop'><label for='answer4'>Robo Cop</label></li>" +
					"</ul>"


	function findQuestion(){
		if(count===1){
			$(".firstQuestion").fadeIn(3000)
			$(".newDivHere").empty()
			$(".newDivHere").append(questionTwoHtml)
		}
		else if (count===2){
			$(".firstQuestion").fadeIn(3000)
			$(".newDivHere").empty()
			$(".newDivHere").append(questionThreeHtml)
		}
		else if (count===3){
			$(".firstQuestion").fadeIn(3000)
			$(".newDivHere").empty()
			$(".newDivHere").append(questionFourHtml)
		}
		else if (count===4){
			$(".firstQuestion").fadeIn(3000)
			$(".newDivHere").empty()
			$(".newDivHere").append(questionFiveHtml)
		}
		else if (count===5){
			$(".score").fadeIn(3000)
			$(".firstQuestion").fadeOut(2000)
			$("#score").append(score)
		}
		else{
			$(".newDivHere").append(questionOneHtml)
		}
	}

	$("#startButton").click(function(){
	$(".firstQuestion").fadeIn(2000);
	$(".start").fadeOut(1000);
	findQuestion();
	});

	function quizQuestions(question, answers, correctAnswer){
		this.question = question;
		this.answers= answers;
		this.correctAnswer= correctAnswer;
	}

	var questionOne = new quizQuestions("What was the name of Mr. Burns' prized teddy bear?",["Bobo", "Yanci", "Sherman", "Teddy"],"Bobo");
	var questionTwo = new quizQuestions("What Ivy League school did Mr. Burns attend?",["Harvard", "Princeton", "Yale", "Brown"],"Yale");
	var questionThree = new quizQuestions("Who Shot Mr. Burns?", ['Smithers', 'Homer', 'Abe', 'Maggie'],'Maggie');
	var questionFour = new quizQuestions("Which of the following garments does he NOT own?", ['Grizzly bear Underwear', 'Gopher Loafers', 'Albino Rhino Chinos', 'Gorilla chest vest'],'Albino Rhino Chinos');
	var questionFive = new quizQuestions("Which of the following has guarded Burns Manor?", ['Robotic Richard Simmons','the Ghost of Howard Taft', 'Guard llama','Robo Cop'],'Robotic Richard Simmons');
		
	var questionList=[questionOne, questionTwo, questionThree, questionFour, questionFive];	

	$("#submitButton").click(function(){
		var answerList = document.getElementsByName("answer");
		for (var i=0; i<answerList.length; i++){
			if (answerList[i].checked){
				var answer=answerList[i].value;
				console.log(answer);
				if (answer===questionList[count].correctAnswer){
					console.log(questionList[count].correctAnswer);
					$(".firstQuestion").hide();
					$(".correct").show();
					$(".correct").fadeOut(2000);
					count = count +1;
					score = score +1;
					$("#currentCount").empty();
					$("#currentCount").append(count+1);
					console.log(count);
					findQuestion();
					break;
				}
				else{
					$(".firstQuestion").hide();
					$(".incorrect").show();
					$(".incorrect").fadeOut(2000);
					count = count +1;
					$("#currentCount").empty();
					$("#currentCount").append(count+1);
					findQuestion();
					break;
				}
			} 
			else{
			}
		}	
	});
});

