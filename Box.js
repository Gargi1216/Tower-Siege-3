class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = 255;
      
    }

    score(){
      if(this.Visibility<0 && this.Visibility>-105){
        score++;
      }
    }

    display(){
      console.log(this.body.speed);
      if(this.body.speed<3){
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
        pop();
      }
    }
  
  };
  