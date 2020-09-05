class Boy extends BaseClass {
    constructor(x,y){
        super(x,y,width,height);

        this.width = 160;
        this.height = 260;

        this.img = loadImage("boy.png");
        Matter.Body.setStatic(this.body,true);
    }
}