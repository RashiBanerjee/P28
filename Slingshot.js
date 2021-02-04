class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    
    fly()
    {
        this.slingshot.bodyA= null;
    }

    display(){
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(1);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}