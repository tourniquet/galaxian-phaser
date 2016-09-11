/* globals game, Phaser */

let menuState = {
  create () {
    game.add.image(0, 0, 'background')

    // display game name
    let gameName = game.add.text(
      game.world.centerX, 50, 'Galaxian',
      { font: '50px Geo', fill: '#ffffff' }
    )
    gameName.anchor.setTo(0.5, 0.5)
    // add tween
    // http://phaser.io/examples/v2/tweens/tween-to
    game.add.tween(gameName).to({ y: 200 }, 3000, Phaser.Easing.Bounce.Out, true)

    // explain how to start the game
    let startGame = game.add.text(
      game.world.centerX, 250, 'press enter to start',
      { font: '20px Arial', fill: '#ffffff' }
    )
    startGame.anchor.setTo(0.5, 0.5)

    // create Phaser keyboard hotkey
    let enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
    // start game on press enter
    enterKey.onDown.addOnce(this.startGame, this)

    // create mute button
    this.muteSound = game.add.button(20, 20, 'mute', this.toggleSound, this)
    // if the mouse is over the button, it becomes a hand cursor
    this.muteSound.input.useHandCursor = true
  },
  startGame () {
    game.state.start('play')
  },
  toggleSound () {
    // switch the Phaser sound variable from true to false and viceversa
    // when game.sound.mute === true, Phaser will mute the game
    game.sound.mute = !game.sound.mute
    // change the frame of the button
    this.muteSound.frame = game.sound.mute ? 1 : 0
  }
}
