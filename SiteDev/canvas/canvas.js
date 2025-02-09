const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

c.style.borderColor = "white";

// x y from top left width height
//c.fillStyle = 'rgba(255, 0, 0, .5)';
// c.fillRect(50, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, .5)';
// c.fillRect(50, 200, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, .5)';
// c.fillRect(50, 300, 100, 100);
// console.log(canvas);

//line x, y,
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(300, 300);
// c.lineTo(200, 600);
// c.lineTo(50, 300);
// c.strokeStyle = 'black';
// c.stroke();

//arc / circle x y radius start angle end angle
//c.beginPath();
//c.arc(200, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = 'green';
//c.stroke();

// for (let i = 0; i < 10; i++) {
//     let x = Math.random() * canvas.width;
//     let y = Math.random() * canvas.height;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'black';
//     c.stroke();
// }

// console.log(canvas.width);
// console.log(canvas.height);
// console.log(Math.random());
// console.log(Math.random() * canvas.width);
// console.log(Math.random() * canvas.height);  