let gameState = {
  preload () {
    game.load.image('player', 'assets/images/player.png')
    game.load.image('enemy', 'assets/images/enemy.png')
    game.load.image('bullet', 'assets/images/laser.png')
  },
  create () {
    // set game background color to black
    game.stage.backgroundColor = '#000'

    // set arcade physics
    game.physics.startSystem(Phaser.Physics.ARCADE)

    // create player, and set collide player with world margin
    this.player = game.add.sprite(400, 400, 'player')
    this.player.anchor.setTo(0.5, 0.5)
    game.physics.enable(this.player)
    this.player.body.collideWorldBounds = true

    // create enemy and set X axe position to the center of the game world
    this.enemy = game.add.sprite(game.world.centerX, 20, 'enemy')
    game.physics.enable(this.enemy)
    this.enemy.anchor.setTo(0.5, 0.5)

    // create bullet
    this.bullet = game.add.sprite(this.player.x, this.player.y - 62, 'bullet')
    this.bullet.anchor.setTo(0.5, 0.5)
    game.physics.enable(this.bullet)
    this.bullet.body.collideWorldBounds = true

    // shoot on spacebar
    this.spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    this.spaceBar.onDown.add(this.fire, this)

    // create cursors
    this.cursors = game.input.keyboard.createCursorKeys()
  },
  update () {
    this.player.body.velocity.x = 0

    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -150
    } else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = 150
    }

    game.physics.arcade.overlap(this.bullet, this.enemy, this.killEnemy, null, this)
  },
  fire () {
    this.bullet.body.velocity.y = 0

    // speed of bullet
    this.bullet.body.velocity.y = -400
  },
  killEnemy () {
    this.enemy.kill()
    this.bullet.kill()
  }
}

let game = new Phaser.Game(800, 400, Phaser.AUTO)
game.state.add('gameState', gameState)
game.state.start('gameState')
