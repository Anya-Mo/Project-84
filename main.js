var canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car1_image="car1.png";
car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;
var background_image="Background.gif";
function add() {
    background_image_tag=new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=background_image;
    car_1imgTag=new Image();
    car_1imgTag.onload=uploadcar1;
    car_1imgTag.src=car1_image;
    car_2imgTag=new Image();
    car_2imgTag.onload=uploadcar2;
    car_2imgTag.src=car2_image;
}
function uploadBackground() {
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car_1imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2() {
    ctx.drawImage(car_2imgTag,car2_x,car2_y,car2_width,car2_height);
}
function my_keydown(e) {
    var keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38') {
        up();
        console.log("Up");
    }
    if (keyPressed=='40') {
        down();
        console.log("Down");
    }
    if (keyPressed=='37') {
        left();
        console.log("Left");
    }
    if (keyPressed=='39') {
        right();
        console.log("Right");
    }
}
function up() {
    if (car1_y>=0) {
        car1_y=car1_y-10;
        console.log("When Up Arrow Pressed, X ="+car1_x+", Y ="+car1_y);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if (car1_y<=500) {
        car1_y=car1_y+10;
        console.log("When Up Arrow Pressed, X ="+car1_x+", Y ="+car1_y);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if (car1_x>=0) {
        car1_x=car1_x-10;
        console.log("When Up Arrow Pressed, X ="+car1_x+", Y ="+car1_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if (car1_x<=700) {
        car1_x=car1_x+10;
        console.log("When Up Arrow Pressed, X ="+car1_x+", Y ="+car1_y);
        uploadBackground();
        uploadRover();
    }
}