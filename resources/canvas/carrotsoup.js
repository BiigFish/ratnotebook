var canvas = document.getElementById('/resources/canvas/carrotsoup.js'),
    ctx    = canvas.getContext('2d');
fitToContainer(canvas);



function fitToContainer(canvas){

    
  canvas.style.width='100%';
  canvas.width  = canvas.offsetWidth;
  canvas.style.height=canvas.width;
  canvas.height = canvas.offsetHeight;




let width = canvas.width;
let height = canvas.height;

let centerX = width / 2;
let centerY = height / 2;

let carrotLeftX = centerX - width * 0.15;
let carrotLeftY = centerY - height * 0.2;
let carrotRightX = centerX - width * 0.05;
let carrotRightY = centerY - height * 0.2;

let carrotGreenX = (carrotLeftX + carrotRightX) / 2;

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(centerX, centerY, width * 0.4, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.moveTo(carrotGreenX, carrotLeftY + height * 0.05);
ctx.lineTo(carrotGreenX - width * 0.02, carrotLeftY - height * 0.08);
ctx.lineTo(carrotGreenX + width * 0.02, carrotLeftY - height * 0.08);
ctx.lineTo(carrotGreenX, carrotLeftY);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'orange';
ctx.strokeStyle = 'orange';
ctx.moveTo(centerX, centerY);
ctx.lineTo(carrotLeftX, carrotLeftY);
ctx.lineTo(carrotRightX, carrotRightY);
ctx.lineTo(centerX, centerY);
ctx.fill();



console.log(carrotLeftX);
console.log(carrotRightX);
console.log(carrotGreenX);

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(centerX, centerY, width * 0.3, 0, 1 * Math.PI);
ctx.fill();


ctx.closePath();

}
