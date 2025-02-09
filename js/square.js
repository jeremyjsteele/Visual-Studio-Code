const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var canvasDepth = Math.sqrt(canvasWidth*canvasWidth + canvasHeight*canvasHeight);
var lineDepth = 1;

function printMousePos(event) {
    console.log("clientX:", + event.clientX);
    console.log("clientY:", + event.clientY);
  }
  
    document.addEventListener("click", printMousePos);

function isMobile() {
    const minWidth = 768; // Minimum width for desktop devices
    return window.innerWidth < minWidth || screen.width < minWidth;
    }
        if (isMobile()) {
        console.log("Mobile device detected");
        }

    else {
        console.log("Desktop device detected");
    }

var mouse = {
    x : undefined,
    y : undefined
    }
    
window.addEventListener ('mousemove',
    function (event) {
    console.log('mouse');
    mouse.x = event.x;
    mouse.y = event.y;
    //console.log('mousemove');
    //console.log(event);
    })
    
    var cx = canvasWidth/2 - canvasWidth/2;
    var cy = canvasHeight/2 - canvasHeight/2;
    var cz = canvasDepth/2 - canvasDepth/2 + 1;//lineDepth;
    var vp = cy + canvasHeight/3;
    var sqslX = cx;// start x=0
    var sqslY = cy;// start y=0
    var sqslZ = cz;// start y=0
    var drwx = cx + canvasWidth/2;//center x canvas 
    var drwy = cy + canvasHeight/2;//center y canvas
    var drwz = cz + canvasHeight/2;//center z canvas
    var sqX = Math.sqrt(drwx*drwy)/2;
    var sqY = Math.sqrt(drwx*drwy)/2;
    var sqZ = Math.sqrt(drwx*drwy)/2;
    
    var x = drwx - sqX/2;
    var y = drwy - sqY/2;
    var z = drwz - sqZ/2;
    var dx = 4;
    var dy = 4;
    var dz = 4;

    c.lineWidth = 1;
    c.beginPath();//face
    c.moveTo(drwx, drwy);
    c.lineTo(drwx, drwy + sqY/2);
    c.lineTo(drwx, drwy - sqY/2);
    c.lineTo(drwx, drwy - sqY/2);
    c.strokeStyle = 'black';
    c.stroke();

    var degree = 1/360;
   
    //start is 0 or line
    var xRotate = 90;
    var xcw = 3.14;
    var xccw = 3.14;
    var ycw = 180;
    var yccw = -180;
    var rv = 180;
    var rv = -180;
    var xcwRotation = xcw/xcw; 
    var xccwRotation = xccw/xccw;
    
    //console.log(degree + "\u00B0");
    console.log("C:", "360");
    console.log("cs px at 0\u00B0 = rad + rad:", sq);//237
    console.log("cs px at 0\u00B0 = diameter:", sq);//237
    console.log("cs px at 0\u00B0 = rotation:", sq * xcwRotation);//237

    console.log("cs px at 0\u00B0 = rotation:", "xcw-xccw");//237
    console.log("cs px at 0\u00B0:", sq);//237
    console.log("\u00B0 at sq:", "rad + rad");
    console.log("rad:", "rad + rad");
    console.log("\u00B0 at sq:", xcw + xccw);
    console.log("sq C:", sq * 3.14);
    console.log("sq:", sq*degree)
    
    console.log("rate:", sq / sq * 3.14);
    console.log("px per degree:", sq*degree);//.659
    //console.log("sc by degree", sq 90    3.14  /(180+180)/degree);//237 / 360 x 360 = 237
    
    console.log("xRotate:", xRotate)
    console.log("sc by degree", sq/(180+180)/degree);//237 / 360 x 360 = 237

//     function Face (x, y, dx, dy, sqszX, sqszY) {
//         this.x = x;
//         this.y = y;
//         this.dx = dx;
//         this.dy = dy;
//         this.dz = dz;
//         this.sqszX = sqszX;
//         this.sqsY = sqszY;

//         this.draw = function () {
//             c.beginPath();//face
//             c.rect(this.x, this.y, sqszX, sqszY);
//             c.strokeStyle = 'black';
//             c.stroke();     
        
//         }
//         this.update = function() {
//             if (this.x + sqszX > innerWidth || this.x < 0) {
//                 this.dx = -this.dx;
//                 }
            
//             if (this.y + sqszY < y) {
//                 this.dy = 0;
//                 this.draw = function () {
//                     c.beginPath();//face
//                     c.rect(this.x, this.y, sqszX, sqszY);
//                     c.strokeStyle = 'black';
//                     c.stroke();     
//                     }
//                 }
        
//                 //this.y += -this.dy;
//                 //this.x += this.dx;
//                 this.x += 0;
//                 this.draw();
//         }
//     }

// //face code above

// function LeftSide (x, y, dx, dy, sqszX, sqszY) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.sqszX = sqszX;
//     this.sqszY = sqszY;

//     this.draw = function () {
//         c.beginPath();//Leftside
//         c.rect(this.x, this.y, sqszX, sqszY);
//         c.strokeStyle = 'red';
//         c.stroke();     
    
//     }
//     this.update = function() {
//         if (this.x > x + sqszX/2) {//max right
//             this.dx = 0;
//             }
        
//         if (this.y + sqszY < y) {
//             this.dy = 0;
//             this.draw = function () {
//                 c.beginPath();//face
//                 c.rect(this.x, this.y, sqszX, sqszY);
//                 c.strokeStyle = 'red';
//                 c.stroke();     
//                 }
//             }
    
//             //this.y += -this.dy;
//             this.x += this.dx;
//             //this.z += this.dz

//             this.draw();
//     }
// }

// //leftside code above

// function RightSide (x, y, dx, dy, sqszX, sqszY) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.sqszX = sqszX;
//     this.sqszY = sqszY;

//     this.draw = function () {
//         c.beginPath();//rightside
//         c.rect(this.x, this.y, sqszX, sqszY);
//         c.strokeStyle = 'green';
//         c.stroke();     
    
//     }
//     this.update = function() {
//         if (-this.dx){
//            console.log('left');
//            console.log("this.x:", x-this.x);
//            this.sqszX = x-this.x
//         }
//         if (this.x < x - sqszX/2) {
//             this.dx = 0;
//             }
//         if (this.y + sqszY < y) {
//             this.dy = 0;
//             this.draw = function () {
//                 c.beginPath();//face
//                 c.rect(this.x, this.y, sqszX, sqszY);
//                 c.strokeStyle = 'green';
//                 c.stroke();     
//                 }
//             }
    
//             this.y +=  this.dy;
//             this.x += -this.dx;
//             //this.dz += this.dz;

//             this.draw();
//     }
// }
//         var face = new Face (x, y, dx, dy, sqszX, sqszY);
//         var leftside = new LeftSide (x, y, dx, dy, sqszX, sqszY);//purple
//         var rightside = new RightSide (x, y, dx, dy, sqszX, sqszY);//green
//         //console.log("face.y:", face.y);
    
//     //var side = new Square (100, 100);
//     //var square = new Square (100, 100, dx, dy, sqsz);
    
//     function animate() {
//     requestAnimationFrame (animate);
//     //c.clearRect(0, 0, innerWidth, innerHeight);
//     c.lineWidth = 1;
//     c.beginPath();//face
//     c.rect(x, y, sqszX, sqszY);
//     c.strokeStyle = 'green';
//     c.stroke();
//     face.update();
//     leftside.update();
//     rightside.update();
//     //console.log("face.y:", face.y);
// }

// animate();

// function startAnimation() {
//     location.reload();
// }
 
// canvas.addEventListener('click', startAnimation);
 
 

    // if (mouse.x = this.x > 50) {
    //     console.log("position");
    //     this.x += 1;
    // } 

    //console.log('draw');
    //console.log(mouse.x);
    // let isDragging = false;
    // let offsetX, offsetY;

    // square.addEventListener('mousedown', (e) => {
    // isDragging = true;

    // // Calculate the offset between the mouse position and the top-left corner of the rectangle
    // offsetX = e.clientX - square.getBoundingClientRect().left;
    // offsetY = e.clientY - square.getBoundingClientRect().top;
    // });

    // square.addEventListener('mousemove', (e) => {
    // if (!isDragging) return;

    // // Update the position of the rectangle based on the mouse position
    // square.style.left = e.clientX - offsetX + 'px';
    // square.style.top = e.clientY - offsetY + 'px';
    // });

    // square.addEventListener('mouseup', () => {
    // isDragging = false;
    // });

    
    console.log("ch", canvasHeight);
    console.log("cw", canvasWidth);
    console.log("cx", cx);
    console.log("cy", cy);
    console.log("cz", cz);
    console.log("cs", sqszX);
    console.log("drwx", drwx);
    console.log("drwy", drwy);


    // if (y > drwy + sqsz/2) {//stop at top 0; go down -dy;
    //     dx = 0;
    //     dy = 0;
    //     }
      
    //     else {color = 'blue'}
      
    //     if (this.dy < 0) {color = "red";}//color if going down 
        
    //     else {color = "black";}//color if going down

   