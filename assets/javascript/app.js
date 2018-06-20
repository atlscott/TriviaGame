window.onload = function (){
	$("#start").on("click", stopWatch.run);
};

	var intervalId;

//Display stopwatch
	var stopWatch = {

			secs: 30,

			run: function(){
				intervalId = setInterval(stopWatch.decrement, 1000);
			},
			
			decrement: function(){

				stopWatch.secs--;

				$("#timer").html(stopWatch.secs + " Seconds Left!");
				
				if(stopWatch.secs === 0 ){
					stopWatch.stop();
				}
			},
			stop: function(){
				clearInterval(intervalId);
			}
	}; 

//Declare global variables and array
	var questions = [{
		question: "Which NFL team has won the Most Super Bowls?",
		choices: ["Dallas Cowboys", "San Francisco 49ers", "New England Patriots", "Pittsburgh Steelers"],
		correct: 3,
	}, {
		question: "What year did the Braves move to Atlanta?",
		choices: ["1908", "1966", "1980", "1955"],
		correct: 1,
	}, {
		question: "Which franchise is the oldest in professional baseball (MLB)?",
		choices: ["Boston Red Sox", "Atlanta Braves", "Chicago Cubs", "New York Yankees"],
		correct: 1,
	}, {
		question: "Which Soccor Team / Country has won the most World Cups?",
		choices: ["Brazil", "Germany", "Italy", "England"],
		correct: 0,
	}, {
        question: "Who has won the most Grand Slam Singles Tennis titles (23) in the 'Open Era'(1968-present)?",
		choices: ["Steffi Graf", "Serena Williams", "Roger Federer", "Rafael Nadal"],
		correct: 1,
	}],
	

		totalQ = questions.length,
		correctAns = 0,
		wrongAns = 0,
		counter = 0;

//Create div for questions and options
	function startGame() {
			$("#questions").text(questions[counter].question);
			$("#answer0").text(questions[counter].choices[0]);
			$("#answer1").text(questions[counter].choices[1]);
			$("#answer2").text(questions[counter].choices[2]);
			$("#answer3").text(questions[counter].choices[3]);

	}

	function confirm() {
		if ($("input").is(":checked")) {

			startGame();
		}
		else {
			alert("Select one of the answers!");
			counter--;
		}
	}
	startGame();

	$("#nextQ").on("click", function() {
		var answer = $("input:checked").val();

		if(answer == questions[counter].correct) {
			correctAns++;
		}
		counter++;

		/*else {
			incorrectAns++;
		}
		counter++;
		*/

		if(counter >= totalQ) {
			$("#mainSec").hide()
			document.getElementById("result").innerHTML = "Your score is: " + correctAns + " of " + totalQ;
			return;	
		}
		confirm();
		restart();

		$(".question").hide().fadeIn("slow");
		$('input[name="choice"]').prop("checked", false);
	})

	function restart(){
		secs = 10;
		startGame();
	}