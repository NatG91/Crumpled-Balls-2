class Dustbin{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
       

        this.width = 200;
        this.height = 200;

        this.thickness = 20;

        this.x=x;
        this.y=y;

 this.bottomBody = Bodies.rectangle(x, y, this.width, this.thickness, options);
        this.leftBody = Bodies.rectangle(x -100, y - 50,this.thickness,this.height, options);
        this.rightBody = Bodies.rectangle(x + 100, y - 50, this.thickness,this.height, options);
        
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);

        this.Img=loadImage("dustbingreen.png");




      }
      display(){
          var dustbinBottom=this.bottomBody.position
          var dustbinLeft=this.leftBody.position
          var dustbinRight=this.rightBody.position
        push();

      



        rectMode(CENTER);

        stroke(255);
        fill("White");
        //rect(dustbinBottom.x,dustbinBottom.y,this.width, this.thickness);

        pop();

        push();

     
   


        rectMode(CENTER);
        stroke(255);
        fill("White");
        //rect(dustbinLeft.x,dustbinLeft.y, this.thickness,this.height);
        pop();

        push();

       



        rectMode(CENTER);
        stroke(255);
        fill("White");
        //rect(dustbinRight.x,dustbinRight.y,this.thickness,this.height);
        image(this.Img,dustbinBottom.x-100,dustbinBottom.y-180,this.width, this.height);
        pop();
      }
}
