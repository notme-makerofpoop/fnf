controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`00f4010408010107001c00020a006400f401640000040000000000000000000000000000000003060000000400012a`), music.PlaybackMode.UntilDone)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`00f4010408010107001c00020a006400f4016400000400000000000000000000000000000000030600000004000125`), music.PlaybackMode.UntilDone)
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, function () {
    tuch_here_play()
})
function tuch_here_play () {
    scene.setBackgroundImage(img`
        eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
        222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
        222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
        222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
        e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
        eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
        2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
        2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
        2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
        eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
        eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
        eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
        eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
        eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
        eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
        eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
        eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
        eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
        eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
        eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
        eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
        eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
        eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
        eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
        eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
        eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
        eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
        eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
        eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
        ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
        ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222aee22aeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
        eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeaaaaaaaaaaaaaaafffffffffffaaaaaaaaaaaaaaaaaaeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
        eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeaaaaaaaaaaaaaaffcccccccccccffaaaaaaaaaaaaaaaeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
        eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeaaaaaaaaaaaaffcccccccccccccccffaaaaaaaaaaaaaeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
        eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeaaaaaaaaaaafcccccccccccccccccccfaaaaaaaaaaaaeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
        eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeaaaaaaaaaafcccccccccccccccccccccfaaaaaaaaaaaeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
        eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeaaaaaaaaafcccccccccccccccccccccccfaaaaaaaaaaeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
        eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeaaaaaaaafcccccccccccccccccccccccccfaaaaaaaaaeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
        ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeeaaaaaaaafcccccccccccccccccccccccccfaaaaaaaaaeeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
        ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeeaaaaaaafcccccccccccccccccccccccccccfaaaaaaaaeeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
        e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeeaaaaaaffccccccccccfffffffccccccccccfaaaaaaaaeeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
        e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeeaaaaaafcccccccccffcccccccffcccccccccfaaaaaaaeeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
        eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeeaaaaaafccccccccfcccccccccccfccccccccfaaaaaaaeeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
        eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeeaaaaaafccccccccfcccccccccccfccccccccfaaaaaaaeeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
        ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeeeaaaaaafcccccccfcccccccccccccfcccccccfaaaaaaaeeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
        ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeeeaaaaaffcccccccfcccccccccccccfcccccccfaaaaaaaeeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
        e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeeeaaaaaafcccccccfcccccccccccccfcccccccfaaaaaaaeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaa323322222222222222e
        e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeeeaaaaaafcccccccfcccccccccccccfcccccccfaaaaaaaeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaa322322222222222222e
        22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeeeaaaaaafcccccccfcccccccccccccfcccccccfaaaaaaa2eeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaee23322222222e22222
        22222e2222332232eeefffffffaaaaaaaaaaaaaaaaaaaaaaaaaaae2eeeeeaaaaaafcccccccfcccccccccccccfcccccccfaaaaaaa2eeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeee2322222222e22222
        222222222332222eeeffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaae2eeee2aaaaaafcccccccfcccccccccccccfcccccccfaaaaaaa2eeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaafeee332222222222222
        2222e222233222eeefffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaae2eeee2aaaaaafccccccccfcccccccccccfccccccccfaaaaaaa2eeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffeee322222222e2222
        2222e222332222eeefffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaae2eeee2aaaaaaffcccccccfcccccccccccfcccccccfaaaaaaaa2eeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffeee332222222e2222
        222e222332222eeeffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaa22eeee2aaaaaaafccccccccffcccccccffccccccccfaaaaaaaa2eeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffeee322222222e222
        222e22232e22eeefffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaa2eeeee2aaaaaaaafcccccccccfffffffcccccccccfaaaaaaaaa2eeeeeeeaaaaaaaaaaafffffffaaaaaaaaaaaffffee332e22222e222
        222e22222e2eeeffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaa2eeeee2aaaaaaaafcccccccccccccccccccccccccfaaaaaaaaa2eeeeeeeaaaaaaaaaafcccccccfaaaaaaaaaafffffee32e22222e222
        22ee2222e2eeefffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaa2eeee22aaaaaaaaafcccccccccccccccccccccccfaaaaaaaaaa2eeeeeeeaaaaaaaaafccffffffffaaaaaaaaaffffffee32e2222ee22
        22e22222e2eeefffffffffffffaaaaaaaaafffffffaaaaaaaaaaa2eeee22aaaaaaaaaafcccccccccccccccccccccfaaaaaaaaaaa22eeeeeeaaaaaaaafccfcccccccffaaaaaaaaffffffee32e22222e22
        22e2222eeeeeffffffffffffffaaaaaaaafcccccccfaaaaaaaaaa2eeee22aaaaaaaaaaafcccccccccccccccccccfaaaaaaaaaaaa22eeeeeeaaaaaaaafccfcccccccffaaaaaaaafffffffeeeee2222e22
        2ee2222eeeefffffffffffffffaaaaaaafcccccccccfaaaaaaaaa2eeee22aaaaaaaaaaaaffcccccccccccccccffaaaaaaaaaaaaa22e2eeeeaaaaaaaafccfcccccccffaaaaaaaaffffffffeeee2222ee2
        2e2222eeeeffffffffffffffffaaaaaafcccfffffffafaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffcccccccccccffaaaaaaaaaaaaaaaaaaaaaaeaaaaaaaafccfcccccccffaaaaaaaafffffffffeeee2222e2
        2e222eee2effffffffffffffffaaaaaafccfcccccccffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffaaaaaaaaaaaaaaaaaaaaaaaaeaaaaaaaafccfcccfcccffaaaaaaaafffffffffe2eee222e2
        2e222eee2effffffffffffffffaaaaaafccfcccccccffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeaaaaaaaafccfcccccccffaaaaaaaafffffffffe2eee222e2
        ee22eeee2effffffffffffffffaaaaaafccfcccccccffaaaaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffaaaaaeaaaaaaaafccfcccccccffaaaaaaaafffffffffe2eeee22ee
        ee22eee22effffffffffffffffaaaaaafccfcccccccffaaaaaaaaaaaafcccccccccccccccccccccccccccccccccccccccccccccccfaaaaaeaaaaaaaaafccffffffffaaaaaaaaafffffffffe22eee22ee
        eeeeee22eeffffffffffffffffaaaaaafccfcccccccffaaaaaaaaaaaafcccccccccccccccccccccccccccccccccccccccccccccccfaaaaaeaaaaaaaaaafcccccccfaaaaaaaaaafffffffffee22eeeeee
        eeeee222efffffffffffffffffaaaaaafccfcccccccffaaaaaaaaaaaafcccccccccccccccccccccccccccccccccccccccccccccccfaaaaaeaaaaaaaaaaacccccccaaaaaaaaaaaffffffffffe222eeeee
        2222222eefffffffffffffffffaaaaaaafcfcccccccfaaaaaaaaaaaaafcccccccccccccccccccccccccccccccccccccccccccccccfaaaaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffee2222222
        222222eeffffffffffffffffffaaaaaaaafafffffffaaaaaaaaaaaaaafcccccccccccccccccccccccccccccccccccccccccccccccfaaaaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffee222222
        22222eeeffffffffffffffffffaaaaaaaaafffffffaaaaaaaaaaaaaaafcccccccccccccccccccccccccccccccccccccccccccccccfaaaaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffeee22222
        222eeeeeffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafccccccfffffffffffffffffffffffffffffffffffccccccfaaaaaeaaaaaaaaaafffffffffaaaaaaaaaafffffffffffeeeee222
        eeee2eeeefffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaaeaaaaaaaaffcccccccccffaaaaaaaaffffffffffeeee2eeee
        222e2ee2efffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaaeaaaaaaafcccccccccccccfaaaaaaaffffffffffe2ee2e222
        222e2ee2efffffffffffffffffaaaaaaaaafffffffffaaaaaaaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaaeaaaaaafcccccccccccccccfaaaaaaffffffffffe2ee2e222
        222e2ee2efffffffffffffffffaaaaaaaffcccccccccffaaaaaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaaeaaaaafccccccfffffffccccfaaaaaffffffffffe2ee2e222
        222e2ee2efffffffffffffffffaaaaaafcccccccccccccfaaaaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaaeaaaafcccccffcccccccffcccfaaaaffffffffffe2ee2e222
        222e2ee22effffffffffffffffaaaaafcccccfffffffcccfaaaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaaeaaaafccccfcccccccccccfccfaaaafffffffffe22ee2e222
        222e2ee22effffffffffffffffaaaafccccffcccccccffccfaaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaaeaaafcccccfcccccccccccfcccfaaafffffffffe22ee2e222
        222e2eee2effffffffffffffffaaaafcccfcccccccccccfcfaaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaa2aaafccccfcccccccccccccfccfaaafffffffffe2eee2e222
        222e22ee2eefffffffffffffffaaafccccfcccccccccccfccfaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaa2aaafccccfcccccccccccccfccfaaaffffffffee2ee22e222
        222e22ee22efffffffffffffffaaafcccfcccccccccccccfcfaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaa2aaafccccfcccccccccccccfccfaaaffffffffe22ee22e222
        222e22ee22efffffffffffffffaaafcccfcccccccccccccfcfaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaa2aaafccccfcccccccccccccfccfaaaffffffffe22ee22e222
        222e22ee22efffffffffffffffaaafcccfcccccccccccccfcfaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaa2aaafccccfcccccccccccccfccfaaaffffffffe22ee22e222
        222e22ee222effffffffffffffaaafcccfcccccccccccccfcfaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaa2aaafccccfcccccccccccccfccfaaafffffffe222ee22e222
        222e22eee22effffffffffffffaaafcccfcccccccccccccfcfaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaa2aaafccccfcccccccccccccfccfaaafffffffe22eee22e222
        222e222ee22effffffffffffffaaafcccfcccccccccccccfcfaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaa2aaafcccccfcccccccccccfcccfaaafffffffe22ee222e222
        222e222ee22eefffffffffffffaaafcccfcccccccccccccfcfa2aaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaa2aaaafccccfcccccccccccfccfaaaaffffffee22ee222e222
        222e222ee222efffffffdfffffaaafccccfcccccccccccfccfaaaaaaafccccccfcccccccccccccccccccccccccccccccccfccccccfaaaaaeaaaafcccccffcccccccffcccfaaaadfffffe222ee222e222
        222e222ee222eddfffdddddfffaaaafcccfcccccccccccfcfaaaaaaaafccccccfffffffffffffffffffffffffffffffffffccccccfaaaaadaaaaafccccccfffffffccccfaaaaadddfffe222ee222e222
        222ee22ee222eeddddddddddddaaaafccccffcccccccffccfaaaaaaaafcccccccccccccccccccccccccccccccccccccccccccccccfaaaaadaaaaaafcccccccccccccccfaaaaaadddddee222ee22ee222
        222ee22ee2222eddddddddddddaaaaafcccccfffffffcccfaaaaaaaaafcccccccccccccccccccccccccccccccccccccccccccccccfaaaaadaaaaaaafcccccccccccccfaaaaaaaddddde2222ee22ee222
        2222e222e2222eedddddddddddaaaaaafcccccccccccccfaaaaaaaaaafcccccccccccccccccccccccccccccccccccccccccccccccfaaaaadaaaaaaaaffcccccccccffaaaaaaaaddddee2222e222e2222
        2222e222ee2222edddddddddddaaaaaaaffcccccccccffaaaaaaaaaaafcccccccccccccccccccccccccccccccccccccccccccccccfaaaaadaaaaaaaaaafffffffffaaaaaaaaaadddde2222ee222e2222
        2222e222ee2222edddddddddddaaaaaaaaafffffffffaaaaaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffaaaaadaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddde2222ee222e2222
        2222e222ee2222eeddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddee2222ee222e2222
        2222e2222e22e22eddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddde22e22e2222e2222
        222222222e22e22eedddddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddee22e22e222222222
        222222222e22e222edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde222e22e222222222
        2222222222e22e22eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee22e22e2222222222
        222222e222e22e222edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde222e22e222e222222
        222222e222222e222eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee222e222222e222222
        222222e2222222e222edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde222e2222222e222222
        222222ee222222e222eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee222e222222ee222222
        2222222e222222e2222edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde2222e222222e2222222
        22222e2e2222222e222eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee222e2222222e2e22222
        22222e2e2222222e222eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee222e2222222e2e22222
        22222e2e22222222e22edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde22e22222222e2e22222
        22222e2ee2222222e22edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde22e2222222ee2e22222
        22222e2ee2222222eeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeee2222222ee2e22222
        22222e22e2222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeee2222222e22e22222
        22222ee2e2222222eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee2222222e2ee22222
        22222ee2e222222eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee222222e2ee22222
        222222e2ee22222edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde22222ee2e222222
        222222e22e2222eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee2222e22e222222
        222222e22e22eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeee22e22e222222
        222222e2eeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeee2e222222
        222222e2edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde2e222222
        222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeee222222
        `)
    mySprite = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f c c c c c c c f f f f f 
        f f f c c c c c c c c c f f f f 
        f f c c c c c c c c c c c f f f 
        f f c c c c c c c c c c c f f f 
        f f c c c c c c c c c c c f f f 
        f f c c c b f c c f b c c f f f 
        f f c c c 1 f c c f 1 c c f f f 
        f f c c c c c c c c c c c f f f 
        f f c c c c c c c c c c c f f f 
        f f f c c c c c c c c c f f f f 
        f f f f c c c c c c c f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Player)
    scaling.scaleByPixels(mySprite, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite.setPosition(81, 29)
    pause(100)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . f f f f . . . . . 
        . . . . . f f f 2 2 f f f . . . 
        . . . . f f f 2 2 2 2 f f f . . 
        . . . f f f e e e e e e f f f . 
        . . . f f e 2 2 2 2 2 2 e e f . 
        . . . f e 2 f f f f f f 2 e f . 
        . . . f f f f e e e e f f f f . 
        . . f f e f b f 4 4 f b f e f f 
        . . f e e 4 1 f d d f 1 4 e e f 
        . . . f e e d d d d d d e e f . 
        . . . . f e e 4 4 4 4 e e f . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . f f f 2 2 f f f . . . . . 
        . . f f f 2 2 2 2 f f f . . . . 
        . f f f e e e e e e f f f . . . 
        . f f e 2 2 2 2 2 2 e e f . . . 
        . f e 2 f f f f f f 2 e f . . . 
        . f f f f e e e e f f f f . . . 
        f f e f b f 4 4 f b f e f f . . 
        f e e 4 1 f d d f 1 4 e e f . . 
        . f e e d d d d d d e e f . . . 
        . . f e e 4 4 4 4 e e f . . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    true
    )
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 6 2 5 5 6 f . . . . 
        . . . . f 6 6 6 6 1 6 6 f . . . 
        . . . . f 6 6 6 6 6 1 6 f . . . 
        . . . . f d f d 6 6 6 1 f . . . 
        . . . . f d f d 6 6 6 6 f f . . 
        . . . . f d 3 d d 6 6 6 f 6 f . 
        . . . . . f d d d f f 6 f f . . 
        . . . . . . f f 3 3 f f 6 6 f . 
        . . . . . f 5 3 3 d d f f f . . 
        . . . . . f 3 3 3 f d d f . . . 
        . . . . . . f 3 5 f f f . . . . 
        . . . . . f 3 3 3 3 f . . . . . 
        . . . . . . f f f f f . . . . . 
        `, SpriteKind.Player)
    scaling.scaleByPixels(mySprite2, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite2.setPosition(135, 98)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 6 2 5 5 6 f . . . . . 
        . . . f 6 6 6 6 1 6 6 f . . . . 
        . . . f 6 6 6 6 6 1 6 f . . . . 
        . . . f d f d 6 6 6 1 f . . . . 
        . . . f d f d 6 6 6 6 f f . . . 
        . . . f d 3 d d 6 6 6 f 6 f . . 
        . . . . f d d d f f 6 f f . . . 
        . . . . . f f 5 3 f 6 6 6 f . . 
        . . . . f 5 3 3 f f f f f . . . 
        . . . . f 3 3 f d f . . . . . . 
        . . . . . f 3 f d f . . . . . . 
        . . . . f 3 5 3 f d f . . . . . 
        . . . . f f 3 3 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . 5 . . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . f 6 2 5 5 6 f . . . . . . 
        . . f 6 6 6 6 1 6 6 f . . . . . 
        . . f 6 6 6 6 6 1 6 f . . . . . 
        . . f d f d 6 6 6 1 f . . . . . 
        . . f d f d 6 6 6 6 f f . . . . 
        . . f d 3 d d 6 6 6 f 6 f . . . 
        . . . f d d d f f 6 f f . . . . 
        . . . . f f 5 3 f 6 6 6 f . . . 
        . . . . f 3 3 f d f . . . . . . 
        . . . . . f 3 f d f . . . . . . 
        . . . . f 3 5 3 f d f . . . . . 
        . . . . f f 3 3 f f . . . . . . 
        `],
    500,
    true
    )
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`00f4010408010107001c00020a006400f4016400000400000000000000000000000000000000030600000004000127`), music.PlaybackMode.UntilDone)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`00f4010408010107001c00020a006400f401640000040000000000000000000000000000000003060000000400011d`), music.PlaybackMode.UntilDone)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111eeeeee111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111eeeeeeee11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111eeeeeeeee1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111eeeeeeeeee1111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111eeeeeeeeeee1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111eeeeeeeeeeeee111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111eeeeeeeeeeeeee1111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff111111111111111111111111111111eeeeeeeeeeeeeeee111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1111111111111111111111111111111eeeeeeeeeeeeeeee1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1111111111111111111111111111111eeeeeee111eeeeee1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1111111111111111111111111111111eeeeee1111eeeeee1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1111111111111111111111111111111eeeeee111111eeeee11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1111111111111111111111111111111eeeeee111111eeeee11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff11111111111111111111111111111111eeeeee111111eeeee111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff11111111111111111111111111111111eeeeee111111eeeee111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff11111111111111111111111111111111eeeee1111111eeeee111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff1111111111111111111111111111111eeeeee1111111eeeeee11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111111111111111eeeeee1111111eeeeee111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1111111111111111111111111111111eeeeeee1111111eeeeee111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff111111111111111111111111111111eeeeeeee1111111eeeeee111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff111111111111111111111111111111eeeeeee111111111eeeee111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111111111111eeeeeeee111111111eeeee111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111111111111eeeeeee1111111111eeeeee11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111111111111eeeeee11111111111eeeeee11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1111111111111111111111111111eeeeeee11111111111eeeeeee1111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff111111111111111111111111111eeeeeee111111111111eeeeeeeee11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111eeeeeeeeeeeeee111111111111eeeeeeeee11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111eeeeeeeeeeeeee1111111111111eeeeeeeee1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111eeeeeeeeeeeeeeeeeeee11111111eeeeeeee1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeee11eeeeeee1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1111111111111111111111eeeeeee1111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1111111111111111111111eeeeeee11111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff111111111111111111111eeeeeee11111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff11111111111111111111eeeeeee1111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff11111111111111111111eeeeee1111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff11111111111111111111eeeeee1111111111111111111111111eeeee111111eeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff11111111111111111111eeeee11111111111111111111111111eeeee11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1111111111111111111eeeee11111111111111111111111111eeeee1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff111111111111111111eeeeee11111111111111111111111111eeeee1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff11111111111111111eeeeee1111111111111111111111111eeeeee111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff11111111111111111eeeeee1111111111111111111111111eeeeee111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1111111111111111eeeeeee1111111111111111111111111eeeeee111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff111111111111111eeeeee11111111111111111111111111eeeeee11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff11111111111111eeeeeee11111111111111111111111111eeeeee11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff111111111111eeeeeeee11111111111111111111111111eeeeee1111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff111111111111eeeeeee111111111111111111111111111eeeeee1111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff11111111111eeeeeee111111111111111111111111111eeeeeee11111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1111111111eeeeee1111111111111111111111111111eeeeeeee111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1111111111eeeee111111111111111111111111111111eeeeeee111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff111111111eeeee111111111111111111111111111111eeeeeee11111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111eeeeee1111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111eeeee111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111eeeee111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
