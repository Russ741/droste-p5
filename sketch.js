function setup() {
    width = 500;
    height = 500;
    createCanvas(width, height);
    startMillis = millis();
}

const recurseMillis = 2000;
const recurseRatio = 0.1875;

function drawRecursive(d) {
    if (d < 0.25) {
        // Too small to be worth drawing; stop
        return;
    }
    fill(0);
    circle(0, 0, 0.75 * d);
    fill(255);
    circle(0, 0, 0.375 * d);
    drawRecursive(recurseRatio * d);
}

function draw() {
    background(255);
    translate(width/2, height/2);
    const elapsedMillis = millis() - startMillis;

    const loopProgress = elapsedMillis % recurseMillis / recurseMillis;
    const zoom = (1 / recurseRatio) ** (loopProgress);
    drawRecursive(2 * height * zoom);
}

// Don't need to call new js(); here - https://github.com/processing/p5.js/issues/4985
