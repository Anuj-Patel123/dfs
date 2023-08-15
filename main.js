musicharry = "";
musicsugar = ""

function setup() {
    canvas = createCanvas(650, 550);
    canvas.center();

    video = creatCapture(VIDEO);
    video.hide();
}
function preload() {
    musicharry = loadSound("harry_potter_theme.mp3");
    musicsugar = loadSound("sugar-coat.mp3");
}
function draw() {
    image(video, 0, 0, 600, 500);
}
