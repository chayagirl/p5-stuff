let img;
function preload() {
	img = loadImage('https://png.pngtree.com/png-clipart/20220526/ourmid/pngtree-rainy-weather-heavy-rain-png-image_4744089.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	noStroke();   
	background(0);

	push();
	translate(0, 2000, 0);
	texture(img);
	box(3000, 1, 2000);
	pop();

	for(i = 0; i < 50; i++) {
		let randomDist1 = 500 * sin(8 * i * i - (4 * i) + 2);
		let randomDist2 = 500 * tan(8 * i * i * i - (16 * i) + 3);

		push();
		translate(0, (6 * frameCount % (1000 + 30 * i)) - 300, 0);
		translate(randomDist1, 0, randomDist2);
		rotateY(radians(frameCount * 5));
		//fill(0, 0, 255);
		texture(img);
		rotateY(HALF_PI / 2);
		box(50, 70, 0);
		rotateY(HALF_PI);
		box(50, 70, 0);
		pop();
	}




	camera(-500 + 500*sin(frameCount/160), -400, 200 + 500*cos(frameCount/160), 0, 0, 0, 0, 1, 0);

}