/* globals game */

let loadState = {
  preload () {
    // menu background image
    game.load.image('background', 'assets/images/background.png')
    // in game image assets
    game.load.image('player', 'assets/images/player.png')
    game.load.image('enemy', 'assets/images/enemy.png')
    game.load.image('bullet', 'assets/images/laser.png')
    // load explosion sprite sheet
    game.load.spritesheet('explosion', 'assets/images/explosion.png', 70, 70)
    // load mute button spritesheet
    game.load.spritesheet('mute', 'assets/images/mute.png', 50, 40)
    // load game audio assets
    game.load.audio('shoot', ['assets/audio/shoot.mp3', 'assets/audio/shoot.ogg'])
    game.load.audio('enemyKill', ['assets/audio/enemykill.mp3', 'assets/audio/enemykill.ogg'])
    game.load.audio('gameOver', ['assets/audio/dead.mp3', 'assets/audio/dead.ogg'])
  },
  create () {
    game.state.start('menu')
  }
}
