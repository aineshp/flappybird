class Rocket{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
       
        this.body = Bodies.rectangle(x,y,40,100,options);
        this.width = 40;
        this.height = 100;
        
        this.image = loadImage("./images/Rocket.png");
        World.add(world,this.body);
    }
   
 


    
    display(){
       
        imageMode(CENTER);
        image(this.image,200,200,this.width,this.height);
        
    }

    changePosition(){
      this.body.position.x = this.body.position.x + x;
       this.body.position.y = this.body.position.y + y;
    }
    
   move (){

   if(keyDown(LEFT_ARROW)){
 this.changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
   this.changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    this.changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    this.changePosition(0,+1);
  }

   }
};