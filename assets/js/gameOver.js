/* globals game, Phaser */

let gameOver = {
  create () {
    // display 'game over' message
    let gameOver = game.add.text(
      game.world.centerX, 200, 'Game over',
      { font: '50px Arial', fill: '#ffffff' }
    )
    gameOver.anchor.setTo(0.5, 0.5)

    // explain how to restart the game
    let restartGame = game.add.text(
      game.world.centerX, 400, 'press enter to restart',
      { font: '20px Arial', fill: '#ffffff' }
    )
    restartGame.anchor.setTo(0.5, 0.5)

    // create Phaser keyboard hotkey
    let enterKey = game.input.keyboard.addkey(Phaser.Keyboard.ENTER)
    // start game on press enter
    enterKey.onDown.addOnce(this.startGame, this)
  },
  startGame () {
    game.state.start('play')
  }
}
