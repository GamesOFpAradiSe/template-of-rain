class VB{
    constructor(x,y,r){

        var options = {
            isStatic:true,
            'friction':0.1
        }

        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("skyBlue")
        circle(0,0,this.r);
        pop()
    }
}