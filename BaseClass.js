class BaseClass{
    constructor(x,y,width,height,angle){

        this.body = Bodies.rectangle(x,y,width,height,angle)
        World.add(world,this.body);

        this.img = loadImage("boy.png");

        this.width = width;
        this.height = height;

    }


    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.width, this.height);
        pop();
      }
}