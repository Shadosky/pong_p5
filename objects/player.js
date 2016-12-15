/**
 * Created by kevingiroux on 08/12/2016.
 */
function Player()
{
    this.x = 0;
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
}