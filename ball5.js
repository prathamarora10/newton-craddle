class Ball5
{
    constructor(x,y){

        var option = {
            isStatic: false
        }
        this.body = Bodies.circle(x,y,20,option)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position

        fill('red')
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,20)
    }
}