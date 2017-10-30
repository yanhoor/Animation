/*
* @Author: yanhoor
* @Date:   2017-10-30 12:03:49
* @Last Modified by:   yanhoor
* @Last Modified time: 2017-10-30 19:05:22
*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var hue = 0,
	raf = null,
	vy = -2,
	par = [],
	x = 0;	//进度条位置

function draw(){
	var color;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	x += 2;
	hue = (x > 400) ? 0 : hue;
	color = "hsla(" + (hue++) + ",100%,40%,1)";
	par.push({
		px: x-5,
		py: 50,
		pvy: vy,
		pcolor: "hsla(" + (hue +30) + ",100%,70%,1)"
	});
	x = (x > 400) ? 0 : x;
	ctx.fillStyle = color;
	ctx.fillRect(0, 40, x, 20);
	var n = par.length;

	while(n--){
		par[n].pvy += (Math.random() + 0.1) / 5;
		par[n].py += par[n].pvy;
		if (par[n].py > canvas.height) {
			par.splice(n, 1);
			continue;
		}
		ctx.fillStyle = par[n].pcolor;
		ctx.fillRect(par[n].px, par[n].py, 5, 5);
	}

	raf = window.requestAnimationFrame(draw);
}

raf = window.requestAnimationFrame(draw);