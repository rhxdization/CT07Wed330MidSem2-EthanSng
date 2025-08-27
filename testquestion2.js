function setup() {
    new Canvas(600,400);
    background(255);
    world.gravity.y = 10;
    
    ground = new Sprite();
    ground.collider = "static";
    ground.y = 400;
    ground.height = 30;
    ground.width = 600;
}

function draw() {
    background(255);
    if (mouse.presses("left")) {
        let x = new Sprite (mouseX, mouseY, 50, 50);
        x.collider = ("dynamic");
        x.bounciness = 0.6;  
    }
}