class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            lenght: 5
            
        }

        this.pointB = pointB;
        this.bodyA = bodyA;

        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }

    fly(){
        this.chain.bodyA = null;
    }

    display(){
        strokeWeight(5);
        if(this.chain.bodyA){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }

}