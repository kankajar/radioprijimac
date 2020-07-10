radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.pause(1000)
    basic.showString(receivedString)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
basic.clearScreen()
radio.setGroup(0)
basic.showLeds(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
