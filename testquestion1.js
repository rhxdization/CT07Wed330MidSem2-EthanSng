function setup() {
    new Canvas(600,400);
    background(255);
    world.gravity.y = 10;
}

function draw() {
    background(255);
    if (mouse.presses("left")) {
        let x = new Sprite (mouseX, mouseY, 50, 50);
        x.collider = ("dynamic");  
    }
}