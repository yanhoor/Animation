/*
* @Author: yanhoor
* @Date:   2017-10-29 11:11:22
* @Last Modified by:   yanhoor
* @Last Modified time: 2017-10-30 19:10:10
*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;
var color = 0;

var rect = {
	x: 0,
	y: 0,
	vx: 2,
	color: "red",
	draw: function(){
		ctx.fillStyle = this.color;
		ctx.fillRect(0, 0, 0, canvas.height);
	}
};

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	rect.x += rect.vx;
	ctx.fillStyle = "hsla(" + changeColor() + ", 100%, 40%, 1)";
	ctx.fillRect(0, 0, rect.x, 30);
	if (rect.x <= canvas.width) {
	raf = window.requestAnimationFrame(draw);
	}else{
		rect.x = 0;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
}

function changeColor(){
	color <= 360 ? color++ : color = 0;
	return color;
}

rect.draw();
raf = window.requestAnimationFrame(draw);