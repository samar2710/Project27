class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,50,350,50,options);
        this.width=350;
        this.height=50;
        
        
}
display(){
    var pos=this.body.position;
    fill("brown");
    rectMode(CENTER);

    rect(400,50,this.width,this.height);
}
}