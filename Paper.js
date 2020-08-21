class Paper{
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0.3,
friction:0.5,
density:1.2
    }
    
    this.radius = radius;

    this.x=x
    this.y=y
    
   this.body = Bodies.circle(x,y,radius/2,options);
this.Img=loadImage("Paper.png");
    

    World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.Img,0,0,this.radius, this.radius);
        pop();
      }
}
