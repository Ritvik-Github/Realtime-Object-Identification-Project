var img_src = "";
function getValue(){
    console.log(document.getElementById("Drop").value + ".jpg");
    preload();
}
function preload(){
    img_src = loadImage(document.getElementById("Drop").value + ".jpg");
}
function setup(){
    canvas = createCanvas(700,700);
    canvas.center();
}
function draw(){
    image(img_src,0,0,700,700);
}