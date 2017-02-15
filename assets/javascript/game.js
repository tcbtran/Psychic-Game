		

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "r", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var userGuesses = [];
		

	document.onkeyup = function() {
		
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		var computerGuess = letters[Math.floor(Math.random() * letters.length)];

		userGuesses.push(userGuess);

	if (userGuess === computerGuess) {
			wins++;
			guesses=10;
		}
		
		if ((userGuess !== computerGuess) && (guesses != 0)) {
			guesses--;
			losses++;
		}

		else if ((userGuess !== computerGuess) && (guesses = 0)) {
			guesses=10;
		}

		var html = "<p>Guess what letter I'm thinking of?</p>" + 
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>" + 
		"<p>Guesses left: " + guesses + "</p>" + 
		"<p>Your Guesses so far: " + userGuesses + " </p>";

		document.querySelector('#psychic_game').innerHTML = html;

	}
