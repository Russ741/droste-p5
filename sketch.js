class Shape {
    relX;
    relY;
    relR;
    color;

    constructor(relX, relY, relR, color) {
        this.relX = relX;
        this.relY = relY;
        this.relR = relR;
        this.color = color;
    }
}
const hs2 = 0.5/Math.sqrt(2);

// TODO: Specify shapes and recursions separately.
const shapes = [
    new Shape(0, 0, 1, "black"),
    new Shape(-hs2, hs2, .5, "white"),
    new Shape(hs2, -hs2, 0.5, "white"),
    new Shape(hs2, -hs2, .25, "black"),
    new Shape(-hs2, hs2, .25, "black")
];

const recurseMillis = 2000;
const recurseRatio = shapes.slice(-1)[0].relR;

function setup() {
    width = 500;
    height = 500;
    createCanvas(width, height);
    startMillis = millis();
    noStroke();
}

function drawRecursive(r, x, y) {
    if (r < 0.25) {
        // Too small to be worth drawing; stop
        return;
    }
    for (const shape of shapes) {
        fill(shape.color);
        circle(shape.relX * r + x, shape.relY * r + y, 2 * shape.relR * r);
    }
    const recurseShape = shapes.slice(-1)[0];
    const nextX = r * recurseShape.relX + x;
    const nextY = r * recurseShape.relY + y;
    drawRecursive(recurseRatio * r, nextX, nextY);
}

function draw() {
    background(255);
    translate(width/2, height/2);
    const elapsedMillis = millis() - startMillis;

    const loopProgress = elapsedMillis % recurseMillis / recurseMillis;
    const zoom = (1 / recurseRatio) ** (loopProgress);
    const r = height / 2 * zoom;

    const recurseShape = shapes.slice(-1)[0];
    // Formula for the nth term of a geometric series; this won't work for co-recursion, but it looks good for now.
    const translationProgress = (1 - recurseRatio ** loopProgress) / (1 - recurseRatio);
    const endX = -recurseShape.relX * r;
    const curX = endX * translationProgress;
    const endY = -recurseShape.relY * r;
    const curY = endY * translationProgress;
    drawRecursive(r, curX, curY);
}

// Don't need to call new js(); here - https://github.com/processing/p5.js/issues/4985
