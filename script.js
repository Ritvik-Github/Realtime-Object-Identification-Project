var img_src = "";
status = "";
object = [];
function preload() {}
function setup() {
  canvas = createCanvas(700, 700);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  var objectDetector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML =
    "Model Loaded, Detecting Objects";
}

function modelLoaded() {
  comsole.log("Model Has Been Loaded !");
  status = true;
  setTimeout(function(){objectDetector.detect(img_src, gotResults);},2000);
}

function draw() {
  image(video, 0, 0, 700, 700);
  if (status != "") {
    for (i = 0; i < object.length; i++) {
      document.getElementById("status").innerHTML =
        "Detected Objects, Drawing Boxes";

      fill("red");
      percent = floor(objects[i].confidence * 100);
      text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
      noFill();
      stroke("red");
      rect(object[i].x, object[i].y, object[i].height, object[i].width);
    }
  }
}

function modelLoaded() {
  console.log("Model Loaded!");
}
function gotResults(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
    object = results;
  }
}
