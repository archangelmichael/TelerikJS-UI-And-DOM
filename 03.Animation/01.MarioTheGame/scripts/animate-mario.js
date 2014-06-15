/// <reference path="_references.js" />

window.onload = function () {
    "use strict";

    var MARIO_MOVEMNET_SPEED = 5,
        MARIO_ANIMATION_SPEED = 3,
        MARIO_JUMP_HEIGHT = 40,
        GROUND_LEVEL = 610;
    var stage = new Kinetic.Stage({
        container: 'the-canvas',
        width: 1440,
        height: 960
    });
    var layer = new Kinetic.Layer();
    var imageObj = new Image();

    imageObj.onload = function () {
        var mario = new Kinetic.Sprite({
            x: 450,
            y: GROUND_LEVEL,
            image: imageObj,
            animation: 'idle',
            animations: {
                idle: [
                  // x, y, width, height (5 frames)
                  610, 665, 160, 250,
                  320, 635, 190, 280,
                  830, 55, 220, 215,
                  335, 980, 175, 240
                ],
                move: [
                  // x, y, width, height (5 frames)
                  560, 985, 240, 260,
                  25, 970, 235, 265,
                  860, 660, 200, 220,
                  25, 970, 235, 265,
                ],
                jump: [
                  // x, y, width, height (5 frames)
                  610, 665, 160, 250,
                  850, 665, 200, 215,
                  1120, 1050, 190, 190,
                  850, 665, 200, 215
                ]
            },
            frameRate: MARIO_ANIMATION_SPEED,
            frameIndex: 0
        });

        layer.add(mario);
        stage.add(layer);
        // start anumation
        mario.start();

        var frameCount = 0;
        mario.on('frameIndexChange', function (eventPerFrame) {
            if (mario.animation() === 'move' && ++frameCount > 4) {
                mario.animation('idle'); // restore original animation
                mario.scaleX(1); // restore original animation
                frameCount = 0;
            }
        });

        function onKeyDown(pressedKey) {
            switch (pressedKey.keyCode) {
                case 37:  // left arrow
                    mario.setX(mario.attrs.x -= MARIO_MOVEMNET_SPEED);
                    mario.attrs.animation = "move";
                    break;
                case 39:  // right arrow
                    mario.setX(mario.attrs.x += MARIO_MOVEMNET_SPEED);
                    mario.scaleX(-1); // move right
                    mario.attrs.animation = "move";
                    break;
                case 32:
                    mario.attrs.animation = "jump";
                    break;
            }
        }

        window.addEventListener('keydown', onKeyDown);
    };

    imageObj.src = "imgs/mario-sprite.png";

    var paper = new Raphael(0, 0, 1440, 960);
    paper.image("imgs/mario-background.png", 0, 0, 1440, 960);
};