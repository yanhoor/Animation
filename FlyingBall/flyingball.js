/*
* @Author: yanhoor
* @Date:   2017-10-28 19:18:05
* @Last Modified by:   yanhoor
* @Last Modified time: 2017-10-28 23:18:49
*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;
var running = false;

var ball = {
	x: 100,
	y: 100,
	vx: 5,
	vy: 2,
	radius: 25,
	color: "blue",
	draw: function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
};

function draw(){
	clear();
	ball.draw();
	ball.x += ball.vx;
	ball.y += ball.vy;

	if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
		ball.vy = -ball.vy; 	//即ball.vy=-2;
	}
	if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
		ball.vx = -ball.vx;
	}
	raf = window.requestAnimationFrame(draw);
}

function clear(){
	//长尾效果，通过填充白色透明背景使原有的圆球淡化作为尾部阴影
	ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

canvas.addEventListener('mousemove', function(e){
	if (!running) {
		clear();
		ball.x = e.clientX;
		ball.y = e.clientY;
		ball.draw();
	}
});

canvas.addEventListener("click", function(){
	if (!running) {
	raf = window.requestAnimationFrame(draw);
	running = true;
	}
});

canvas.addEventListener("mouseout", function(){
	window.cancelAnimationFrame(raf);
	running = false;
});

ball.draw();