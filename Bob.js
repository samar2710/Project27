class Bob{
    constructor(x,y){
    var options={
        isStatic:false,
        'density':1.2
    }
    this.body=Matter.Bodies.circle(x,y,20,options);
    
    this.radius=20;
    this.x=x;
    this.y=y;
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("gold");
    ellipse(0,0,40);

    ellipseMode(CENTER);
    pop();
}
}