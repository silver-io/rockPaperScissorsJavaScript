function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
  rock:     { scissors: 'crushes', lizard: 'squashes' },
  paper:    { rock: 'covers', spock: 'disproves' },
  scissors: { paper: 'cuts', lizard: 'decapitates' },
  lizard:   { spock: 'poisons', paper: 'eats' },
  spock:    { rock: 'vaporises', scissors: 'smashes' }
};


Game.prototype.winner = function() {
	if(this.player1.pick === this.player2.pick)
  return null;

	if(this.PAIRS[this.player1.pick].beats.indexOf(this.player2.pick) > -1 ) {
  return this.player1;
	} else {
		return this.player2;
	}
};

Game.prototype.draw = function() {
	if(PAIRS[this.player1.pick]['beats']  === [this.player2.pick]['beats']) {
		return [null, null, null, null, null];
	}
};

Game.prototype.winningMessage = function(first_argument) {
	// body...
};