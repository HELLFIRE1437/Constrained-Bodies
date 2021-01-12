class Chain {
    constructor(bodyA , bodyB){
        var options = {
            length : 10 ,
            stiffness : 0.04 ,
            bodyA : bodyA ,
            bodyB : bodyB
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pos1 = this.chain.bodyA.position ;
        var pos2 = this.chain.bodyB.position ;
        strokeWeight(4);
        line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
}