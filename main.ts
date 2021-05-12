input.onButtonPressed(Button.A, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
    게임()
})
function 게임 () {
    for (let index = 0; index < 8; index++) {
        총알.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (총알.isTouching(목표)) {
            목표.delete()
            효과음()
            game.addScore(1)
            목표 = game.createSprite(randint(0, 4), randint(0, 3))
        }
    }
    총알.change(LedSpriteProperty.Y, 4)
}
function 효과음 () {
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
}
let 총알: game.LedSprite = null
let 목표: game.LedSprite = null
목표 = game.createSprite(0, 1)
총알 = game.createSprite(2, 4)
game.setScore(0)
game.startCountdown(30000)
basic.forever(function () {
    목표.ifOnEdgeBounce()
    목표.move(1)
    basic.pause(300)
})
