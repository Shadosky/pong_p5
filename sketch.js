var player;
var enemy;
var ball;
var scl = 20;
var rows;
var cols;
var score1;
var score2;

function setup() {
    createCanvas(640, 480);
    frameRate(10);

    rows = width / scl;
    cols = height / scl;

    player = new Player();
    enemy = new Enemy();
    ball = new Ball();
    score1 = new Score();
    score1.setX((width/2)-scl*7);

    score2 = new Score();
    score2.setX((width/2)+scl*3);

}


function draw() {
    background(51);


    ball.testContact();
    ball.update();
    player.update();
    enemy.update();
    ball.testScore();

    ball.show();
    player.show();
    enemy.show();
    score1.show();
    score2.show();
}

function keyPressed() {

    if (keyCode === UP_ARROW) {
        player.dir(-1);
    } else if (keyCode === DOWN_ARROW) {
        player.dir(1);
    }
}

function keyReleased() {

    if (keyCode === UP_ARROW) {
        player.dir(0);
    } else if (keyCode === DOWN_ARROW) {
        player.dir(0);
    }
}