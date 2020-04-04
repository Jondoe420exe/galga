sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    bad_guy.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bad_guy.destroy(effects.fire, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 8 . . 6 . . . . . . . . . . 
. . . . 8 . . . . . . . . . . . 
. . . . . 8 . 6 . 9 . . . . . . 
. . . . . 8 . . 6 . . . . . . . 
. . . . . 8 . . 6 . 9 . . . . . 
. . . . . 8 . . 6 . . . . . . . 
. . . . . 8 . 6 . 9 . . . . . . 
. . . . 8 . . . . . . . . . . . 
. . 8 . . 6 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 85, 0)
})
let projectile: Sprite = null
let bad_guy: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 c . . . . . . . . . 
. . . 9 . 2 2 c . . . . . . . . 
. . 9 . . . 2 2 4 4 8 8 . . . . 
. . 9 . 9 . 2 5 4 8 9 9 9 . . . 
9 . 9 . 9 . 4 5 5 4 8 2 4 . . . 
9 . 9 . 9 . 4 4 4 4 2 4 4 5 . . 
9 . 9 . 9 . 4 5 5 4 8 2 4 . . . 
9 . 9 . 9 . 2 5 4 8 9 9 9 . . . 
. . 9 . . . 2 2 4 4 8 8 . . . . 
. . . 9 . 2 2 c . . . . . . . . 
. . . . . 2 c . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite, 125, 125)
info.setLife(3)
bad_guy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . b d d d d d b . . . . . 
. . . b a a a a a a a b . . . . 
. . . b b d b b b d b b . . . . 
. . b b d d b b d d d b b . . . 
. c c b b b d c b b b b c c . . 
. . c c c c c c c c c c c . . . 
. . . . . . . . . . . . . . . . 
. . . . 9 . . . . . 9 . . . . . 
. . 9 . . 9 9 9 9 9 . . 9 . . . 
. . . 9 . . . . . . . 9 . . . . 
. . . . 9 9 9 9 9 9 9 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
