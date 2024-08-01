var canvas = document.getElementById("canva1");
var ctx = canvas.getContext("2d");

const cany = canvas.height/6;
const canx = canvas.width*1/5;
ctx.font = "16px Arial";

var mousex;
var mousey;

    var farmer = new Image();
    var bomba = new Image();
    var medic =new Image();
    var farmclick = new Image();
    var bombaclick = new Image();
    var mediclick = new Image();
    bomba.src = "bomba.png";
    medic.src = "medic.png";
    farmer.src = "farmer logo.png";
    farmclick.src ="clickf.png";
    bombaclick = "click b.png";
    mediclick = "click m.png";
    

    farmer.onload = function() {ctx.drawImage(farmer, canx, 50, 600, 300);};
    bomba.onload = function() {ctx.drawImage(bomba, canx, 400, 600, 300);};
    medic.onload = function() {ctx.drawImage(medic, canx, 750, 600, 300);};

    // Wait for the image to load, then draw it on the canvas

canvas.addEventListener('mousemove',(event)=>
{
    var farmer = new Image();
    var bomba = new Image();
    var medic =new Image();
    var farmclick = new Image();
    var bombaclick = new Image();
    var mediclick = new Image();
    bomba.src = "bomba.png";
    medic.src = "medic.png";
    farmer.src = "farmer logo.png";
    farmclick.src ="clickf.png";
    bombaclick.src = "click b.png";
    mediclick.src = "click m.png";
    mousex = event.offsetX;
    mousey = event.offsetY;
    console.log("x:" + mousex +"y:"+mousey);
    farmer.onload = function() {ctx.drawImage(farmer, canx, 50, 600, 300);};
    bomba.onload = function() {ctx.drawImage(bomba, canx, 400, 600, 300);};
    medic.onload = function() {ctx.drawImage(medic, canx, 750, 600, 300);};
    if(mousex < 750 && mousex > 234 && mousey < 293 && mousey>81){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        farmclick.onload = function() {ctx.drawImage(farmclick, canx, 50, 600, 300);};
        bomba.onload = function() {ctx.drawImage(bomba, canx, 400, 600, 300);};
        medic.onload = function() {ctx.drawImage(medic, canx, 750, 600, 300);};

        
    }
    else if(mousex < 750 && mousex > 234 && mousey < 670 && mousey > 427){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        farmer.onload = function() {ctx.drawImage(farmer, canx, 50, 600, 300);};
        bombaclick.onload = function() {ctx.drawImage(bombaclick, canx, 400, 600, 300);};
        medic.onload = function() {ctx.drawImage(medic, canx, 750, 600, 300);};

    }
    else if(mousex < 750 && mousex > 234 && mousey < 987 && mousey > 782){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        farmer.onload = function() {ctx.drawImage(farmer, canx, 50, 600, 300);};
        bomba.onload = function() {ctx.drawImage(bomba, canx, 400, 600, 300);};
        mediclick.onload = function() {ctx.drawImage(mediclick, canx, 750, 600, 300);};

    }
    canvas.addEventListener('mousedown',(event)=>
        {
            var farmer = new Image();
            var bomba = new Image();
            var medic =new Image();
            var farmclick = new Image();
            var bombaclick = new Image();
            var mediclick = new Image();
            bomba.src = "bomba.png";
            medic.src = "medic.png";
            farmer.src = "farmer logo.png";
            farmclick.src ="clickf.png";
            bombaclick.src = "click b.png";
            mediclick.src = "click m.png";
            mousex = event.offsetX;
            mousey = event.offsetY;
            console.log("x:" + mousex +"y:"+mousey);
            farmer.onload = function() {ctx.drawImage(farmer, canx, 50, 600, 300);};
            bomba.onload = function() {ctx.drawImage(bomba, canx, 400, 600, 300);};
            medic.onload = function() {ctx.drawImage(medic, canx, 750, 600, 300);};
            if(mousex < 750 && mousex > 234 && mousey < 293 && mousey>81){
                window.location.href = "farm.html";
        
                
            }
            else if(mousex < 750 && mousex > 234 && mousey < 670 && mousey > 427){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                farmer.onload = function() {ctx.drawImage(farmer, canx, 50, 600, 300);};
                bombaclick.onload = function() {ctx.drawImage(bombaclick, canx, 400, 600, 300);};
                medic.onload = function() {ctx.drawImage(medic, canx, 750, 600, 300);};
        
            }
            else if(mousex < 750 && mousex > 234 && mousey < 987 && mousey > 782){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                farmer.onload = function() {ctx.drawImage(farmer, canx, 50, 600, 300);};
                bomba.onload = function() {ctx.drawImage(bomba, canx, 400, 600, 300);};
                mediclick.onload = function() {ctx.drawImage(mediclick, canx, 750, 600, 300);};
        
            }
            }
        )
    }
    
)


ctx.fill();