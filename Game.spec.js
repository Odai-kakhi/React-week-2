describe('A tic tac toe game', function(){

  var Game = require('./../src/Game');

  describe('Add players to game', function(){
    var TicTacToe;

    beforeEach(function(){
      TicTacToe = new Game()
    })

    it('Should be able to create a game and add a player', function(){
      TicTacToe.addPlayer('Mauro')
    })

    it('Should add one player and tell me that is the first player', function(){
      var playerNumber = TicTacToe.addPlayer('Mauro')
      expect(playerNumber).toBe(1)
    })

    it('Should add one player and if I ask for the firstPlayer name should be the same has playerOne', function(){
      var playerNumber = TicTacToe.addPlayer('Mauro')
      expect(TicTacToe.getPlayerName(playerNumber)).toBe('Mauro')
    })

    it('Should be able to add two players', function(){
      var PlayerNumberOne = TicTacToe.addPlayer('Mauro')
      var PlayerNumberTwo = TicTacToe.addPlayer('Ali')
      expect(TicTacToe.players.length).toBe(2)
    })

    it('If add two players, getPlayerName should still behave correctly', function(){
      TicTacToe.addPlayer('Mauro')
      var PlayerNumberTwo = TicTacToe.addPlayer('Ali')
      expect(TicTacToe.getPlayerName(PlayerNumberTwo)).toBe('Ali')
    })

    it('Shouldn\'t allow us to add a third player', function(){
      var players = ['Mauro', 'Ali', 'David']
      players.forEach(function(player){
        TicTacToe.addPlayer(player)
      })
      players.splice(2)
      expect(TicTacToe.players).toEqual(players)
    })

    it('Should not start with one player only', function(){
      TicTacToe.addPlayer('Mauor')
      expect(TicTacToe.isGameStarted()).toBe(false)
    })

  })


  describe('Having two players', function(){

    var TicTacToe;
    beforeEach(function(){
      TicTacToe = new Game()
      TicTacToe.addPlayer('Mauro')
      TicTacToe.addPlayer('Ali')
    })

    it('Should start the game', function(){
      expect(TicTacToe.isGameStarted()).toBe(true)
    })

    it('Should start the game with an empty board', function(){
      expect(TicTacToe.board.filter(function(pos){
        return pos !== null
      }).length).toBe(0)
    })

    it('Should tell us who play next', function(){
      expect(TicTacToe.next()).toBe(1)
    })

    it('Should always tell me the right player that needs to play', function(){
      var i = 1;
      while(i !== 2){
        TicTacToe.next()
        i++
      }
      expect(TicTacToe.next()).toBe(1)
    })

    it('Should allow to play', function(){
      expect(TicTacToe.play(1, 4)).toBe(true)
    })

    it('Should not allow to play two player the same move', function(){
      expect(TicTacToe.play(1, 4)).toBe(true)
      expect(TicTacToe.play(2, 4)).toBe(false)
    })

    it('Should tell me the right player after the move', function(){
      expect(TicTacToe.play(1, 4)).toBe(true)
      expect(TicTacToe.next()).toBe(2)
    })

    it('Should tell me the right player after the move', function(){
     expect(TicTacToe.play(1, 4)).toBe(true)
     expect(TicTacToe.play(2, 1)).toBe(true)
     expect(TicTacToe.next()).toBe(1)
    })

    it('Should not allow the same player to play twice', function(){
      expect(TicTacToe.play(1, 1)).toBe(true)
      expect(TicTacToe.next()).toBe(2)
      expect(TicTacToe.play(2, 3)).toBe(true)
      expect(TicTacToe.next()).toBe(1)
    })
  })

  describe('Check the winner', function(){
    var TicTacToe;
    beforeEach(function(){
      TicTacToe = new Game()
      TicTacToe.addPlayer('Mauro')
      TicTacToe.addPlayer('Ali')
    })

     it('If the player 1 makes the orizontal line', function(){
      TicTacToe.board = [ 1, 1, 1, 2, null, null, 2, null, null ]
       expect(TicTacToe.winner()).toBe(1)
     })

    it('If the player 2 makes the orizontal line', function(){
      TicTacToe.board = [ 2, 2, 2, 1, null, null, 2, null, null]
      expect(TicTacToe.winner()).toBe(2)
    })

    it('If there is no winner and the board is full', function(){
         TicTacToe.board = [ 1, 2, 1, 1, 2, 2, 2, 1, 2 ]
         expect(TicTacToe.winner()).toBe(false)
       })
  })

})
