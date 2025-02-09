// const myCanvas = document.querySelector('canvas');//<canvas>
// const myc = myCanvas.getContext("2d");
// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;
// var canvasWidth = myCanvas.width;
// var canvasHeight = myCanvas.height;

// //var destCtx = destinationCanvas.getContext('2d');
// myc.drawImage(cube, 0, 0);
// //myc.drawImage(cube, 0, 0);

const myCanvas = document.querySelector('canvas');
const myc = myCanvas.getContext("2d");
myc.fillStyle = "red";
myc.fillRect(50,0,100,100);

const myshps = myCanvas.getContext("2d");
myshps.fillStyle = "black";
myshps.fillRect(95,110,10,10);

myc.globalCompositeOperation = 'destination-out';
myc.fillRect(96,111,8,8);

myc.globalCompositeOperation = 'source-over';
myc.putImageData(myc.fillRect(80,50,8,8));

