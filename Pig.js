class Pig{
    constructor(x,y){
     var option={
         restitution:0.2
       }
       this.body=Bodies.rectangle(x,y,50,50,option)
       this.width=50;
       this.height=50;
       World.add(world,this.body);
    }
    display(){
        var pose=this.body.position
        var angle=this.body.angle
        push();
        translate(pose.x,pose.y)
        rotate(angle);
        rectMode(CENTER);
         fill("green");
        rect(0,0,this.width,this.height)
        pop();
    }
 }