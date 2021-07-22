function preload(){

}

function setup(){
    canvas = createCanvas(400,325);
    canvas.position(525,300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,325);
}