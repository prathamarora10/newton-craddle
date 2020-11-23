class Point
{
    constructor(bodyA,pointB){

        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length: 0
        }
        this.pointB = pointB

        this.point = Constraint.create(option)
        World.add(world,this.point)
        
    }
    display(){
        
        var posA = this.point.bodyA.position
        var posB = this.pointB

        line(posA.x,posA.y,posB.x,posB.y)
    }
}