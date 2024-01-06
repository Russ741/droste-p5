function setup() {
    width = 500;
    height = 500;
    createCanvas(width, height);
    startTime = millis();
}

function drawRecursive(d) {
    // TODO: Skip drawing circles that are too big, too.
    if (d < 0.25) {
        // Too small to be worth drawing; stop
        return;
    }
    fill(0);
    circle(0, 0, 0.75 * d);
    fill(255);
    circle(0, 0, 0.375 * d);
    drawRecursive(0.1875 * d);
}

function draw() {
    translate(width/2, height/2);
    time = millis();

    // zoom = (time / 3000) ** 2;
    // drawRecursive(height * zoom);
    stroke(0);
    fill(0);

    point(random(-width/2, width/2), random(-height/2, height/2));
}

// Don't need to call new js(); here - https://github.com/processing/p5.js/issues/4985
