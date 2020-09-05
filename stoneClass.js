class Stone extends BaseClass{
    constructor(x,y){
        super(x,y,width,height);
        this.width = 50;
        this.height = 50;

        this.img = loadImage("stone.png");
        //Matter.Body.setStatic(this.body,true);
    }

    display(){
        
            var pos = this.body.position;
         
    
            imageMode(CENTER);
            image(this.img,pos.x,pos.y,this.width,this.height);
            
     
    }

    move(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

    }
}