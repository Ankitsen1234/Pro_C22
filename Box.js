class Box {
constructor(x, y, width, height) {
var options = {
'restitution':0.8,
 }
 this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
    
 World.add(world, this.body);
 this.image = loadImage("packageIMG");
 this.image.scale=0.2
}

}