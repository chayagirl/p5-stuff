let img;
let myFont;

function preload() {
    img = loadImage("https://i.ibb.co/FXLptPd/aotrapped.png")
    myFont = loadFont("font.ttf")
}
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    
}

function draw() {
    background(255);
    translate(100, 100, -100);
    noStroke()
    
    for (let o = 0; o < 8; o++) {
        push()
        translate(250*o-1000, 0, 0)
        rotateY(radians(frameCount))
        pointLight(255, 0, 255, mouseX - windowWidth/2, mouseY - windowHeight/2, 0);
        specularMaterial(255);
        cylinder(30, 1000);
        pop()
        for (let i = 0; i < 8; i++) {
            push()
            translate(250*o-1000, 400-130*i, 0)
            rotateY(radians(frameCount + (1+ o/6)))
            pointLight(255, 0, 255, mouseX - windowWidth/2, mouseY - windowHeight/2, 0);
            specularMaterial(255);
            torus()
            pop()
        }
    }

    push()
    texture(img)
    translate(mouseX - windowWidth/2 - 70, mouseY - windowHeight/2 - 70, 100)
    rotateX(radians(frameCount))
    rotateY(radians(frameCount))
    rotateZ(radians(frameCount))
    box(70)
    pop()
    
    push()
    fill(255, 0, 255);
  textFont(myFont);
  textSize(100);
  text('midboss tower', -500, -550);
    pop()
}
