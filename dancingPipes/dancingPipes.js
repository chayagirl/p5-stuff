function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	
}

function draw() {
	noStroke();
	background(255);
	for (i = 0; i < 8; i++) {
		push();
		directionalLight(255, 255, 255, 50, -50, -100)
		fill(255/i, 40, 60*i)
		translate((i-2)*150, 10*i, 100*sin(frameCount*i/160));
		rotateX(radians(frameCount));
		rotateY(radians(frameCount)*i);
		ellipsoid(50, 50*tan(frameCount/30), 50*(5*(radians(frameCount))-i));
		pop();
	}
}