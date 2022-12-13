class box{
    constructor() {  
      this.box = document.getElementById("box");
      this.container = document.getElementById("container");
      this.y = 1;
      this.x = 1;
    }
   draw(){
     this.box.style.top = this.y + "px";
     this.box.style.left = this.x + "px";
   }
   up() {
     this.y += -30;
     this.draw()
   }
    right() {
    this.x += 30;
       this.draw()
   }
    left() {
      this.x += -30;
       this.draw()
    
   }
     down() {
       this.y += 30;  
        this.draw()
     }
   }
   
    var box2 = new box();
   
   
   box2.draw()