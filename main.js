
function setup(){
    canvas = createCanvas(750 , 450);
    canvas.position(480, 270);
    o = ml5.objectDetector("cocossd" , justload);
    v = createCapture(VIDEO);
    v.hide();
}

function justload(){
    console.log("IT IS LOOADED INITIATION HAS BEGUN");
}

function draw(){
    image(v, 0, 0, 750, 450);
}