$(document).ready(function() {
	var magic8ball = {};
		magic8ball.listOfAnswers = ["Heck yes!", "Fo' sho', yo", "You know it, homie", "Not so much", "You're joking, right?", "Hell to the no!", "No comment", "Not a chance", "Nice try, jackass"];
		magic8ball.askQuestion = function(question) {
			$("#answer").fadeIn(4000);
			$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
			$("#8ball").effect("shake");
			var randomNumber = Math.random();
			var randomNumberForList = randomNumber * this.listOfAnswers.length;
			var randomIndex = Math.floor(randomNumberForList);
			var answerText = this.listOfAnswers[randomIndex];
			$('#answer').text(answerText);
			console.log(question);
			console.log(answerText);

	};
	$("#answer").hide();
	var onClick = function() {
		$("#answer").hide();
		$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
		setTimeout(
			function() {
    			var question = prompt('ASK A YES/NO QUESTION!');
		magic8ball.askQuestion(magic8ball.question);
			}, 500);
	};
	$('#questionButton').click(onClick);

});
