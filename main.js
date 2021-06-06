var canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=10;
var background_img="Background.gif";
function add() {
    background_imgTag=new Image();
    background_imgTag=uploadBackground;
    background_imgTag=background_image;
    car_1imgTag=new Image();
    car_1imgTag.onload=uploadcar1;
    car_1imgTag.src="car1.png";
    car_2imgTag=new Image();
    car_2imgTag.onload=uploadcar1;
    car_2imgTag.src="car2.png";
}
function uploadBackground() {
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car_1imgTag,car_x,car_y,car_width,car_height);
}
function uploadcar2() {
    ctx.drawImage(car_2image_tag,car2_x,car2_y,car2_width,car2_height);
}