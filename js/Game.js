//create a Game class with methods for starting
//and ending the game, handling interactions,
//getting random phrases, checking for a win,
// and removing a life counter.
//create game class

class Game {

	constructor(missed, phrase) {
		this.missed = missed;
		this.phrase = new Phrase();
	}

	//this method randomly retrieves one of the phrases stored in the phrases array.
	getRandomPhrase() {
		const randomPhrase = this.phrase[Math.floor(Math.random() * this.phrase.length)];
		return randomPhrase;
	}
	//this method checks to see if the button clicked by the player
	//matches a letter in the phrase.
	//Try a switch statment??
	 handleInteraction() {
	  if (checkLetter()) {
	      phrase.showMatchedLetter();
	      this.checkForWin();
	    } else {
	      this.removeLife();
	    }
	}
	//this method removes a life, removes a heart from the board, and,
	//if the player is out of lives, ends the game.
	removeLife() {
		if (scoreboard <= 1) {
      scoreboard.remove(scoreboard[0]);
	}
	else {
		alert('Game Over!');
	}
}

	//this method checks to see if the player has selected all of the letters.
	checkForWin() {

	}
	//this method displays a message if the player
	// wins or a different message if they lose.
	gameOver() {}
	//calls the getRandomPhrase() method, and adds that phrase to the board
	// by calling the Phrase class' addPhraseToDisplay() method.
	startGame() {
		let phrase = this.getRandomPhrase();
		this.phrase.addPhraseToDisplay(phrase);
	}
}
