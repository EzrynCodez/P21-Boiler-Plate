class Ball {
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;


        var options = {
            isStatic: false,
            restitution: 0.95
        }

        this.body = Bodies.circle(this.x, this.y, this.r, options);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        stroke(255);
        fill(127);
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
}