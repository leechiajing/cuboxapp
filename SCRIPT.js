var box = [];
var contour = [
    {x:10,y:10},
    {x:20,y:50},
    {x:30,y:50},
    {x:40,y:60},
    {x:50,y:45},
    {x:60,y:30},
    {x:50,y:20},
    {x:40,y:15},
    {x:10,y:10},
    { x: 5, y: 5 },
  { x: 25, y: 75 },
  { x: 45, y: 75 },
  { x: 65, y: 90 },
  { x: 75, y: 67.5 },
  { x: 90, y: 45 },
  { x: 75, y: 30 },
  { x: 65, y: 22.5 },
  { x: 5, y: 5 },
  { x: 0, y: 0 },
  { x: 30, y: 100 },
  { x: 60, y: 100 },
  { x: 80, y: 120 },
  { x: 100, y: 90 },
  { x: 120, y: 60 },
  { x: 100, y: 40 },
  { x: 80, y: 30 },
  { x: 0, y: 0 },
  { x: -12.5, y: -12.5 },
  { x: 37.5, y: 125 },
  { x: 75, y: 125 },
  { x: 100, y: 150 },
  { x: 125, y: 112.5 },
  { x: 150, y: 75 },
  { x: 125, y: 50 },
  { x: 100, y: 37.5 },
  { x: -12.5, y: -12.5 },
  { x: -10, y: -10 },
  { x: 40, y: 140 },
  { x: 70, y: 140 },
  { x: 100, y: 180 },
  { x: 130, y: 125 },
  { x: 160, y: 70 },
  { x: 130, y: 40 },
  { x: 100, y: 25 },
  { x: -10, y: -10 }

    
];
const automaticBarrier={
    barrierx: 300,
    barriery: 500,
}
let animationId;
const myStuff = document.getElementById('me');
const restart =document.getElementById('restart');
const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');

function getRandomNumber(min, max) {
  // Generate a random number between -1 and 1
  const randomSign = Math.random() < 0.5 ? -1 : 1;

  // Generate a random number between the specified range
  const randomNumber = Math.random() * (max - min) + min;

  // Multiply the random number by the random sign to get a positive or negative number
  return randomNumber * randomSign;
}

function molecule_feature(){
    for(i = 0; i < 20; i++){
        const velocityX = getRandomNumber(-1,1);
        const velocityY = getRandomNumber(-1,1);
        const molecule ={
            x: 200,
            y: 200,
            dx: velocityX,
            dy: velocityY
        }
        box.push(molecule);
    }
}


box.push(automaticBarrier);

function start() {
  moving_molecule();
}

function moving_molecule() {
  ctx.clearRect(0, 0, 600, 600);
   box.forEach((molecule) => {
    molecule.x += molecule.dx;
    molecule.y += molecule.dy;
    ctx.beginPath();
    ctx.arc(molecule.x, molecule.y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "gray";
    ctx.fill();
    if(automaticBarrier.barrierx + 50 >= molecule.x &&
      molecule.x >= automaticBarrier.barrierx - 50 &&
      automaticBarrier.barriery + 50 >= molecule.y &&
      molecule.y >= automaticBarrier.barriery - 50){
        molecule.dy = 0;
        molecule.dx = 0;

    }

    box.forEach((automaticBarrier) => {
      if (
        automaticBarrier.barrierx + 50 >= molecule.x &&
        molecule.x >= automaticBarrier.barrierx - 50 &&
        automaticBarrier.barriery + 50 >= molecule.y &&
        molecule.y >= automaticBarrier.barriery - 50
      ) {
        ctx.moveTo(automaticBarrier.barrierx + 50, automaticBarrier.barriery);
        ctx.lineTo(automaticBarrier.barrierx, automaticBarrier.barriery + 10);
        ctx.moveTo(automaticBarrier.barrierx - 50, automaticBarrier.barriery);
        ctx.lineTo(automaticBarrier.barrierx, automaticBarrier.barriery + 10);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 7;
        ctx.stroke();
      }
      ctx.fillStyle = "brown";
      ctx.fillRect(automaticBarrier.barrierx, automaticBarrier.barriery, 10, 20);
      
    });
    ctx.beginPath();
  
  });
  
  ctx.ellipse(200, 200, 100, 150, 0, 0, 2 * Math.PI);
  ctx.fillStyle="black";
  ctx.stroke();
  animationId = requestAnimationFrame(moving_molecule);
}
function renew(){
  box.forEach((molecule)=>{
    molecule.x = 0;
    molecule.y =0;
  });
  box.splice(-20);
}

// Add event listener to the restart button
document.getElementById('click').addEventListener('click', () => {
  renew();
  molecule_feature();
});
molecule_feature();
moving_molecule();

// Start the animation
