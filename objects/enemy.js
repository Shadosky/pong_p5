/**
 * Created by kevingiroux on 08/12/2016.
 */
function Enemy()
{
    this.x = width-scl;
    this.yspeed = 0;
    this.size = 3;
    this.y = (height/2)-scl*(this.size-1);

    this.show = function ()
    {
        fill(255);
        rect(this.x, this.y, scl, scl*this.size);

    }

    this.update = function ()
    {
        this.y = constrain(this.y+this.yspeed,  0, height-(scl*this.size));
    }

    this.dir = function (y)
    {
        this.yspeed = (y*scl);

    }

    this.calc = function () {
        if (ball.x > width/3  && ball.xspeed > 0) {
            if (this.y > ball.y) {
                this.dir(-1);
            } else if (this.y < ball.y) {
                this.dir(1);
            } else {
                this.dir(0);
            }
        } else {
            this.dir(0);
        }
    }

}