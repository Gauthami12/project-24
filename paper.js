class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            density : 1.2,
            friction : 0.3
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = width;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var radius = this.radius;
        ellipseMode(CENTER);
        fill(244,122,158);
        stroke(244,122,158);
        ellipse(pos.x, pos.y, radius);
      }
}