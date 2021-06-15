x=0;
y=0;
function imagesave() {
    save('clown_nose_youlookclownish.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, consolelog);
    posenet.on('pose', finalresult);
}
function draw() {
    image(video, 0, 0, 300, 300);
    stroke(red);
    circle(x, y, 10);
}
function consolelog() {
    console.log("model loaded");
}

function finalresult(results) {
    if (results.length > 0) {
        console.log(results);
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        console.log(x + ',' + y);
    }
}