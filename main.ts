input.onButtonPressed(Button.A, function () {
    music.playMelody("G F G A - F E D ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("A F E F D G E F ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . # # # .
        # # # # #
        . # # # .
        # . . . #
        `)
})
