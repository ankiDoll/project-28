class Tree extends BaseClass {
    constructor(x,y){
        super(x,y,width,height);
        this.width = 450;
        this.height = 550;

        this.img = loadImage("tree.png");
        Matter.Body.setStatic(this.body,true);
    }
}