var myImage;

function preload(){
    myImage = loadImage("images/sea.jpg");
}
function setup() {
    createCanvas(windowWidth,windowHeight);
    myImage.filter("blur",2);
}

function draw() {
    backgroundImage(myImage);
    
    translate(0,-height/15);
    
    fill('rgba(255,255,255,0.4)');
    textFont('Bungee');
    textSize(height/4);
    textAlign(CENTER);
    
    if(hour()>=0 && hour()<=9) {
        text("0"+hour(),width/2,height/3);
    } else {text(hour(),width/2,height/3)}
    
    if(minute()>=0 && minute()<=9) {
    text("0"+minute(),width/2,height/3*2);
    } else {text(minute(),width/2,height/3*2);}
    
    if(second()>=0 && second()<=9) {
    text("0"+second(),width/2,height);
    } else {text(second(),width/2,height);}
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}

function backgroundImage(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;


    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;


    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;


    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);


    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;


    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;


    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}
