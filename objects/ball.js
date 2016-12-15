/**
 * Created by kevingiroux on 08/12/2016.
 */
function Ball()
{
    this.x = (rows/2-1)*scl;
    this.y = (cols/2-1)*scl;

    this.lastTouch = 0;


    this.yspeed = random([-1, -.5, .5, 1]);
    this.xspeed = random([-1, 1]);

    this.show = function ()
    {
        fill(255, 250,20);
        rect(this.x, this.y, scl, scl);
    }

    this.update = function () {

        this.x = constrain(this.x + floor(this.xspeed*scl), 0,width-scl);
        this.y = constrain(this.y + floor(this.yspeed*scl), 0, height-scl);

        //console.log('x: '+this.x+' y: '+this.y);
    }

    this.restart = function () {
        console.log('restarting');

    }

    this.testContact = function () {
        var v1 = createVector(ceil(this.x), ceil(this.y), 0);
        var vtop = createVector(this.x, 0, 0);
        var vdown = createVector(this.x, height-scl, 0);

        var distanceTop = v1.dist(vtop);
        var distanceDown = v1.dist(vdown);

        var vPlayer = [];
        for (var i=0; i < player.size; i++) {
            vPlayer[i] = createVector(scl, player.y + (i * scl), 0);
        }

        var vEnemy = [];
        for (var i=0; i < enemy.size; i++) {
            vEnemy[i] = createVector(width-(scl*2), enemy.y + (i * scl), 0);
        }

        if (distanceTop == 0 || distanceDown == 0) {
            this.yspeed = this.yspeed*-1;
        }

        var i=1;
        for (var singleCellV in vPlayer) {
            var distanceP = v1.dist(vPlayer[singleCellV]);
            if (distanceP <= 10 ) {
                if (this.lastTouch != 1 ) {
                    this.xspeed = this.xspeed*-1;
                    this.lastTouch = 1;
                    switch (i) {
                        case 1:
                            this.yspeed -= .5;
                            break;
                        case 2 :
                            break;
                        case 3 :
                            this.yspeed += .5;
                            break;
                    }
                }
            }
            i++;
        }

        var i=1;
        for (var singleCellV in vEnemy) {
            var distanceP = v1.dist(vEnemy[singleCellV]);
            if (distanceP <= 10 ) {
                if (this.lastTouch != 2 ) {
                    this.xspeed = this.xspeed*-1;
                    this.lastTouch = 2;
                    switch (i) {
                        case 1:
                            this.yspeed -= .5;
                            break;
                        case 2 :
                            break;
                        case 3 :
                            this.yspeed += .5;
                            break;
                    }
                }
            }
            i++
        }
    }

    this.testScore = function () {

        if (this.x == 0 ) {
            score2.score ++;
            if(score2.score == 10) {
                score2.score = 0;
                score1.score = 0;
            }

            this.x = (rows/2-1)*scl;
            this.y = (cols/2-1)*scl;

            this.lastTouch = 0;


            this.yspeed = random([-1, -.5, .5, 1]);
            this.xspeed = random([-1, 1]);
        }

        if (this.x == width-scl ) {
            score1.score ++;
            if(score1.score == 10) {
                score2.score = 0;
                score1.score = 0;
            }

            this.x = (rows/2-1)*scl;
            this.y = (cols/2-1)*scl;

            this.lastTouch = 0;


            this.yspeed = random([-1, -.5, .5, 1]);
            this.xspeed = random([-1, 1]);
        }
    }


}