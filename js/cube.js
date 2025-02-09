const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var centerX = canvasWidth / 2;
var centerY = canvasHeight / 2;
var vp = canvasHeight / 3;
var cubeSize = vp/2;
var fx = centerX/cubeSize;//5.83
var fy = (innerHeight-vp)/cubeSize;//1.13
var fxy = fx/fy;
var cubeTriB = centerX/fx;
var cubeTriA = (canvasHeight-vp)/fx;
var cubePtop = cubeTriA;
var cubeBottom = vp + cubeSize + cubePtop;
var line = 4;


//var bottomCenterY = canvasHeight;

function isMobile() {
  const minWidth = 768; // Minimum width for desktop devices
  return window.innerWidth < minWidth || screen.width < minWidth;
}

if (isMobile()) {
  console.log("Mobile device detected");
  //var canvasHeight = window.innerHeight*(innerWidth/innerHeight);
//var centerX = canvasWidth / 2;
//var centerY = canvasHeight / 2;
  //var bottomCenterY = canvasHeight; 
console.log("ch",canvasHeight);
console.log("vp",vp);
console.log("cs", cubeSize);
console.log("pt1y",pt1y)
var cubeSize = vp/2;
var vp = canvasHeight / 3;
var pt1x = centerX-cubeSize/2;//good
var pt1y = vp+cubeSize/2;
var pt2x = centerX-cubeSize/2;//good
var pt2y = vp+(cubeSize/2)+cubeSize;
var pt3x = centerX;//good
var pt3y = vp + cubeSize;
var pt4x = centerX;//good
var pt4y = vp+cubeSize*2;
var pt5x = centerX+cubeSize/2;//good
var pt5y = vp+cubeSize/2;
var pt6x = centerX+cubeSize/2;//good
var pt6y = vp+(cubeSize/2)+cubeSize;
var pt7x = centerX;//good
var pt8y = vp + cubeSize;

c.lineWidth = 1;
c.beginPath();//x crosshair +
c.moveTo(centerX, centerY -5);
c.lineTo(centerX, centerY +5);
c.strokeStyle = 'black';
c.stroke();

c.lineWidth = 1;
c.beginPath();//y crosshair +
c.moveTo(centerX -5, centerY);
c.lineTo(centerX +5, centerY);
c.strokeStyle = 'black';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 1
c.moveTo(pt1x, pt1y);
c.lineTo(pt2x, pt2y);
c.strokeStyle = 'green';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 2
c.moveTo(pt3x, pt3y);
c.lineTo(pt4x, pt4y);
c.strokeStyle = 'red';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 3
c.moveTo(pt5x, pt5y);
c.lineTo(pt6x, pt6y);
c.strokeStyle = 'green';
c.stroke();

c.lineWidth = 4;
c.beginPath();//backline
c.moveTo(pt7x, vp);
c.lineTo(pt7x, pt8y);
c.strokeStyle = 'green';
c.stroke();

} else {
  console.log("Desktop device detected");
var cubeSize;
  
var pt1x = centerX-cubeSize;
var pt1y = vp+cubeTriA;
var pt2x = centerX-cubeTriB;
var pt2y = vp+cubeTriA+cubeSize;
var pt3x = centerX;
var pt3y = vp+cubeTriA*2;
var pt4x = centerX;
var pt4y = vp+cubeTriA*2+cubeSize;
var pt5x = centerX+cubeTriB;
var pt5y = vp+cubeTriA;
var pt6x = centerX+cubeTriB;
var pt6y = vp+cubeTriA+cubeSize
var pt7x = centerX;
var pt8y = vp + cubeSize;

c.lineWidth = 1;
c.beginPath();//x crosshair +
c.moveTo(centerX, centerY -5);
c.lineTo(centerX, centerY +5);
c.strokeStyle = 'black';
c.stroke();

c.lineWidth = 1;
c.beginPath();//y crosshair +
c.moveTo(centerX -5, centerY);
c.lineTo(centerX +5, centerY);
c.strokeStyle = 'black';
c.stroke();

c.lineWidth = 1;
c.beginPath();//x axis
c.moveTo(canvasWidth, canvasHeight);
c.lineTo(centerX, vp);
c.strokeStyle = 'pink';
c.stroke();

c.beginPath();//y axis
c.moveTo(centerX, vp);
c.lineTo(0, canvasHeight-line);
c.strokeStyle = 'lightgreen';
c.stroke();

c.beginPath();//z axis
c.moveTo(centerX, 0);
c.lineTo(centerX, canvasHeight);
c.strokeStyle = 'lightgray';
c.stroke();

c.beginPath();//y axis
c.moveTo(centerX, vp+cubeSize);
c.lineTo(cubeSize,canvasHeight);
c.strokeStyle = 'red';
c.stroke();

c.beginPath();//cube left side
c.moveTo(centerX-cubeSize, canvasHeight);
c.lineTo(centerX-cubeSize, 0);
c.strokeStyle = 'lightgray';
c.stroke();

c.beginPath();//cube right side
c.moveTo(centerX+cubeSize, canvasHeight);
c.lineTo(centerX+cubeSize, 0);
c.strokeStyle = 'lightgray';
c.stroke();

var cubeTriX = Math.sqrt(cubeTriA**2+cubeTriB**2); 

c.lineWidth = 1;
c.beginPath();//cube horizontal center
c.moveTo(0, pt1y);
c.lineTo(innerWidth, pt5y);
c.strokeStyle = 'lightgray';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 1
c.moveTo(pt1x, pt1y);
c.lineTo(pt2x, pt2y);
c.strokeStyle = 'green';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 2
c.moveTo(pt3x,pt3y);
c.lineTo(pt4x,pt4y);
c.strokeStyle = 'green';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 3
c.moveTo(pt5x, pt5y);
c.lineTo(pt6x, pt6y);
c.strokeStyle = 'green';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 4
c.moveTo(pt7x, vp);
c.lineTo(pt1x, pt1y);
c.strokeStyle = 'blue';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 5
c.moveTo(pt7x, vp);
c.lineTo(pt5x, pt5y);
c.strokeStyle = 'blue';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 7
c.moveTo(pt3x, pt3y);
c.lineTo(pt1x,pt1y);
c.strokeStyle = 'blue';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 6
c.moveTo(pt3x, pt3y);
c.lineTo(pt5x, pt5y);
c.strokeStyle = 'blue';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 8
c.moveTo(pt4x, pt4y);
c.lineTo(pt2x, pt2y);
c.strokeStyle = 'red';
c.stroke();

c.lineWidth = 4;
c.beginPath();//cube line 9 
c.moveTo(pt4x, pt4y);
c.lineTo(pt6x, pt6y);
c.strokeStyle = 'red';
c.stroke();

c.lineWidth = 4;
c.beginPath();//baseline left
c.moveTo(pt7x, pt8y);
c.lineTo(pt2x, pt2y);
c.strokeStyle = 'red';
c.stroke();

c.lineWidth = 4;
c.beginPath();//baseline right
c.moveTo(pt7x, pt8y);
c.lineTo(pt6x, pt6y);
c.strokeStyle = 'red';
c.stroke();

c.lineWidth = 4;
c.beginPath();//backline
c.moveTo(pt7x, vp);
c.lineTo(pt7x, pt8y);
c.strokeStyle = 'green';
c.stroke();

  // var x = centerX;
  // var y = vp+(cubeTriA*2)+cubeSize;
  // var x2 = centerX+cubeTriB;
  // var y2 = vp+cubeTriA+cubeSize;
  var dx = -1;
  var dy = -1;
  var dx2 = -1;
  var dy2 = -1;
  

function Side (x, y, dx, dy){
  this.x = x;//centerX;
  this.y = y;
  this.x2 = x+cubeSize;//vp+cubeTriA+cubeSize;
  this.y2 = y+(cubeSize-11.61);//vp+cubeTriA+cubeSize;
  this.dx = dx;
  this.dy = dy;
  

  this.draw = function() {

    c.lineWidth = 4;
    c.beginPath();//cube line 6
    c.moveTo(this.x, this.y);
    //-cubeSize - [(cubeSize/fy)*2])
    c.lineTo(this.x2, this.y2);
    c.strokeStyle = 'black';
    c.stroke();
    console.log("cta:",cubeTriA*fy);
  }
}


}
var side = new Side (centerX, cubeTriA * fy - cubeSize);
console.log('test2');
  // this.update = function() {
  //   if (this.x > 100) {//travel up
  //     this.dy = this.dy;
      
  //   }
      //this.dy2 = this.dy2;
    //} 
  
    // if (y < vp + cubePtop || y < (vp+cubeTriA*2)) {//stop at top 0; go down -dy;
    // this.dy = 0;
    // this.dy2 = 0;
    // }
  
    // else {color = 'blue'}
  
    // if (this.dy < 0) {color = "green";}//color if going up 
    
    // else {color = "black";}//color if going down 

function animate() {
  requestAnimationFrame (animate);
  //c.clearRect(0, 0, innerWidth, innerWidth );
  side.draw();

  // c.lineWidth = 4;
  // c.beginPath();//cube line 6
  // c.moveTo(x, y);
  // c.lineTo(x2, y2);
  // c.strokeStyle = color;
  // c.stroke();

  //this.y += dy;//point 1 +y
  //this.y2 += dy2;//point 2 +y
}

animate();

//   var x3 = centerX-cubeTriB;
//   var x4 = centerX;
//   var y3 = vp+cubeTriA+cubeSize;
//   var y4 = vp+cubeTriA*2+cubeSize 
//   var dx3 = -1;
//   var dy3 = -1;
//   var dx4 = -1;
//   var dy4 = -1;

//   function animate() {
//   //c.clearRect(0, 0, innerWidth, innerWidth );
// requestAnimationFrame (animate);
//   c.lineWidth = 4;
//   c.beginPath();//cube line 8
//   c.moveTo(x3, y3);
//   c.lineTo(x4, y4);
//   c.strokeStyle = 'color';
//   c.stroke();
  
//   y3 += dy3;
//   y4 += dy4;
  
//   if (y3 > vp + cubeSize + cubePtop) {//travel up
//     dy3 = -dy3;
//     dy4 = -dy4;
// } 

// if (y4 < vp + (cubeTriA*2)) {//stop at top 0; go down -dy;
//   dy3 = 0;
//   dy4 = 0;
// }

// else {color = 'green'}

// if (dy3 < 0) {color = "black";}//color if going up 
  
// else {color = "black";}//color if going down 

// }

// animate();

function printMousePos(event) {
  console.log("clientX:", + event.clientX);
  console.log("clientY:", + event.clientY);
}

document.addEventListener("click", printMousePos);

console.log(innerWidth);
console.log(cubeTriA);
console.log(cubeTriB);
console.log(fx);
console.log(fy);
console.log(fxy);
//console.log(color);
console.log("innerHeight:", innerHeight);
console.log("vp:", vp);
console.log("centerX:", centerX);
console.log("centerY:", centerY);
console.log("cube size:", cubeSize);
//console.log("x:", x);
//console.log("y:", y);
//console.log("x2:", x2);
//console.log("y2", y2);
//console.log("start y:", y);
//console.log("end y2:", y2);
//console.log("stroke start:", x, y);
//console.log("stroke end:", x2, y2);
console.log("cubePtop:", cubeTriA*2);
console.log("cubePtop - cubeSize:", cubePtop - cubeSize);
console.log("side-d:", cubeSize);
console.log("vp + cubePtop", vp + cubeTriA*2);
console.log("vp + cubePtop + side-d", vp + cubeTriA*2 + cubeSize);//534
console.log("innerHeight:", innerHeight);
console.log("stop:", cubeBottom);

// x y from top left width height

// ------>Trying to clone and move further up
// ------>Locations recognized seperately with correct colors

//globalCompositeOperation = 'destination-out';//removes nothing
//c.globalCompositeOperation = 'destination-out';//alone removes cloned area clone destination

// const myClone = document.querySelector('canvas');//clone area
// var mycl = myClone.getContext("2d");
// mycl.globalCompositeOperation = 'source-over';

// mycl.fillStyle = "yellow";//correct area is correct color

// var clx = centerX-cubeTriB-(line*2);
// var cly = vp-line;
// var clw = cubeSize*2+(line*4);
// var clh = cubeBottom-vp+cubeTriA+(line*3);

// mycl.fillRect(clx, cly, clw, clh);//correct fill area and color

// const myCanvas = document.querySelector('canvas');//new location
// const myc = myCanvas.getContext("2d");

// myc.fillStyle = "lightgreen";

// var cx = centerX-cubeTriB-(line*2);
// var cy = 10;
// var cw = cubeSize*2+(line*4);
// var ch = cubeBottom-vp+cubeTriA-(line*3);

// myc.fillRect(cx, cy, cw, ch);//correct fill area and color
// var out = myc.fillRect;

// //canvas.mycl = 'destination-over';//removes what is animated in cloned area
// //c.putImageData(imageData ImageData,200, 280,0,0);

// console.log(out)