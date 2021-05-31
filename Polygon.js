class Polygon{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,radius);
        this.width = radius;
        this.image = loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        //translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image( this.image,this.body.position.x, this.body.position.y, this.width, this.width);
      }
}