function setup() {
    width = 500;
    height = 500;
    createCanvas(width, height);


    loop();
}

function draw() {
    translate(width/2, height/2);
    fill(0);
    circle(0, 0, 0.75 * height);
}

// Don't need to call new js(); here - https://github.com/processing/p5.js/issues/4985