class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,750,850,10,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }
}