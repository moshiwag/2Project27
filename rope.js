class Rope {
    constructor(body1, body2,) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10,
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
