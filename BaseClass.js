class BaseClass 
{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){

        push();
        strokeWeight(1.5);
        
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        pop();
      }
}