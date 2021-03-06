class Ground{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        this.x=x
        this.y=y
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(2);
        fill("Yellow");
        rect(0,0,this.width, this.height);
        pop();
      }
}