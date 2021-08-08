class Rain{
    constructor(x,y){

        var options = {
            'friction':0.1
        }

        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("skyBlue")
        circle(0,0,10);
        pop()
    }
}