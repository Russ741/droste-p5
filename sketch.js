class Shape {
    relX;
    relY;
    relD;
    color;

    constructor(relX, relY, relD, color) {
        this.relX = relX;
        this.relY = relY;
        this.relD = relD;
        this.color = color;
    }
}

const shapes = [
    new Shape(0, 0, 1, "black"),
    new Shape(0, 0, .5, "white"),
    new Shape(0, 0, .25, "black")
];

const recurseMillis = 2000;
const recurseRatio = shapes.slice(-1)[0].relD;

function setup() {
    width = 500;
    height = 500;
    createCanvas(width, height);
    startMillis = millis();
    noStroke();
}

function drawRecursive(d) {
    if (d < 0.25) {
        // Too small to be worth drawing; stop
        return;
    }
    for (const shape of shapes) {
        fill(shape.color);
        circle(shape.relX * d, shape.relY * d, shape.relD * d);
    }
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
