class Umbrella{
    constructor(x, y){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.circle(x, y, 50, options);

        this.img =loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
    }

}