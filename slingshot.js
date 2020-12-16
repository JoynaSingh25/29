class SlingShot{
    constructor(polygon, pointB){
        var options = {
            bodyA: polygon,
            pointB: pointB,
            stiffness: 1,
            length: 10
        }
        
        this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world, this.polygon);
    }

    fly(){
        this.polygon.bodyA = null;
    }

    attach(body){
     this.polygon.bodyA=body;
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
           // push();
            
           // stroke(48,22,8);
           // if(pointA.x < 220) {
               // strokeWeight(7);
               // line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
               // line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
               
            //}
          //  else{
            //    strokeWeight(3);
               // line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
               // line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
           // }
           
            
           // pop();
        }
    }
    
}