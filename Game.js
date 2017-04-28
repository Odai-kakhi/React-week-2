function TicTacToe(){
  this.players = [];
  this.started = false;
  this.startPlayer = 1;

  this.createEmptyBoard = function(){
    this.board = [];
    var i=0;
    while(i < 9){
      this.board.push(null);
      i++;
    }
  }

  this.startGame = function(){
    this.createEmptyBoard();
    this.started = true;
  }

  this.addPlayer = function( name ){
    if(this.players.length === 2) return false;
    this.players.push(name);

    if(this.players.length === 2) this.startGame();

    return this.players.length;
  }

  this.getPlayerName = function( player ){
    return this.players[player-1];
  }

  this.isGameStarted = function(){
    return this.started;
  }

  this.next = function(){
    var moves = this.board.filter(function(pos){
      return pos !== null;
    }).length;
    if(moves === 0) return this.startPlayer;
    if(moves % 2 === 1) return 2;
    return 1;
  }

  this.play = function(player, position){
    if( this.board[position] !== null ) return false;
    this.board[position] = player;
    return true;
  }
  this.winner=function (board) {
    for(i = 0 ; i <= this.board.length ; i ++)
    if (this.board[i] == this.board[i+1] && this.board[i+1] == this.board[i+2] ||
        this.board[i] == this.board[i+3] && this.board[i+3] == this.board[i+6] ||
        this.board[i] == this.board [i+4] && this.board[i+4] == this.board[i+8] ||
        this.board[i+2] == this.board [i+4] && this.board[i+4] == this.board[i+6]
      )

    {
      return this.winner=this.board[i];
    }


    else {
      return this.winner = false ;
    }

  }
}

module.exports = TicTacToe;
