function setup() {
    width = 500;
    height = 500;
    createCanvas(width, height);
    startTime = millis();

    loop();
}

function draw() {
    translate(width/2, height/2);
    time = millis();

    zoom = (time / 3000) ** 2;
    fill(0);
    circle(0, 0, 0.75 * height * zoom);
    fill(255);
    circle(0, 0, 0.375 * height * zoom);
}

// Don't need to call new js(); here - https://github.com/processing/p5.js/issues/4985