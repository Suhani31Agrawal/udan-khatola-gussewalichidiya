class Log{
    constructor(x,y,height,angle){
     var option={
         restitution:0.2,
         friction:0.9,
         density:1
       }
       this.body=Bodies.rectangle(x,y,15,height,option)
       this.width=15
       this.height=height
       Matter.Body.setAngle(this.body,angle)
       World.add(world,this.body);
    }
    display(){
        var pose=this.body.position
        var angle=this.body.angle
        push();
        translate(pose.x,pose.y)
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("yellow");
         fill("brown");
        rect(0,0,this.width,this.height)
        pop();
    }
 }