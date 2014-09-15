var PAIRS = {
  rock:     { beats: 'scissors' },
  paper:    { beats: 'rock' },
  scissors: { beats: 'paper' }
};

function Player(name) {
  this.name = name;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}


Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Game.prototype.winner = function() {
	if(PAIRS[this.player1.pick]['beats'] == this.player2.pick) {
    return this.player1;
	} else {
		return this.player2;
	}
};

Game.prototype.draw = function() {
	if(PAIRS[this.player1.pick] == this.player2.pick) {
		return null
	}
};

};