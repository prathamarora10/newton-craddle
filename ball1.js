class Ball
{
    constructor(x,y){

        var option = {
            isStatic: false,
            restitution:1,
			friction:0,
			density:0.8
        }
        this.body = Bodies.circle(x,y,20,option)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position

        push()
			translate(pos.x, pos.y);
            ellipseMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,20, 20);
            pop()
         
    }
}