var img_src = "";
function getValue() {
    console.log(document.getElementById("Drop").value + ".jpg");
    preload();
}
function preload() {
    img_src = loadImage(document.getElementById("Drop").value + ".jpg");
}
function setup() {
    canvas = createCanvas(700, 700);
    canvas.center();
    var objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    comsole.log("Model Has Been Loaded !");
}

function draw() {
    image(img_src, 0, 0, 700, 700);
    if (document.getElementById("Drop").value == "Glass") {
        stroke("red");
        fill("red");
        text("Glass", 200, 220);
        noFill();
        rect(200, 220, 300, 300);
        //rect(x, y, w, h, [tl], [tr], [br], [bl]);
        //text(str, x, y, x2, y2);
    } else if (document.getElementById("Drop").value == "Pen") {
        stroke("red");
        fill("red");
        text("Pen", 100, 220);
        noFill();
        rect(100, 220, 500, 300);
        //rect(x, y, w, h, [tl], [tr], [br], [bl]);
        //text(str, x, y, x2, y2);
    } else if (document.getElementById("Drop").value == "Watch") {
        stroke("red");
        fill("red");
        text("Watch", 100, 120);
        noFill();
        rect(100, 120, 500, 400);
        //rect(x, y, w, h, [tl], [tr], [br], [bl]);
        //text(str, x, y, x2, y2);
    } else if (document.getElementById("Drop").value == "Keyboard") {
        stroke("red");
        fill("red");
        text("Keyboard", 50, 120);
        noFill();
        rect(50, 120, 550, 400);
        //rect(x, y, w, h, [tl], [tr], [br], [bl]);
        //text(str, x, y, x2, y2);
    } else if (document.getElementById("Drop").value == "Scissors") {
        stroke("red");
        fill("red");
        text("Scissors", 150, 120);
        noFill();
        rect(150, 120, 300, 400);
        //rect(x, y, w, h, [tl], [tr], [br], [bl]);
        //text(str, x, y, x2, y2);
    }
}

function modelLoaded() {
    console.log('Model Loaded!');
}

objectDetector.detect(document.getElementById("Drop").value + ".jpg", (error, results) => {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
