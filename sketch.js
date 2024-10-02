let slider;
let button;
let selectedColor = [255, 0, 0];


function setup() {
    createCanvas(400, 400);

    // Make a Slider
    slider = createSlider(0,100,2);
    slider.position(20,50);

    //Make a Button
    button = createButton('Change the Color!');
    button.position(20,70);
    button.mousePressed(colorChange);

}

function draw() {
    background(220)

    let shapeSize = slider.value();
    fill(selectedColor);
    ellipse(width/2, height/2, shapeSize, shapeSize)
}

function colorChange() {
    selectedColor = [(Math.floor(Math.random() * 256)), (Math.floor(Math.random() * 256)), (Math.floor(Math.random() * 256))];
}