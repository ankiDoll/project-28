class Mango extends BaseClass {
    constructor(x,y){
        super(x,y,width,height)

        this.width = 70;
        this.height = 70;

       Matter.Body.setStatic(this.body,true);

        this.img = loadImage("mango.png");

    }

    display(){
        var pos = this.body.position;

        //pos.x = mouseX;
        //pos.y = mouseY;

        super.display();
    }
}