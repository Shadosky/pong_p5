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
        this.y = constrain(ball.y-scl,  0, height-(scl*this.size));
    }

}