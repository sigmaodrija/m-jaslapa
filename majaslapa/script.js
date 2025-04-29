const myCanvas = document.getElementById("myCanvas")
const ctx = myCanvas.getContext("2d")


function MyKeyDownHandler (MyEvent) { 
  if (MyEvent.keyCode == 37 && bag_x > 0) {bag_x = bag_x - 10};  
  if (MyEvent.keyCode == 39 && bag_x+BagImg.width < myCanvas.width)
           {bag_x = bag_x+10};
  }

addEventListener("keydown", MyKeyDownHandler); 

var bag_x = 0;
var bag_y = 0;
var BagImg = new Image();
BagImg.src = "https://cdn-icons-png.flaticon.com/128/679/679713.png";

var perfume_x = 0;
var perfume_y = 0;
var PerfumeImg = new Image();
PerfumeImg.src = "https://cdn-icons-png.flaticon.com/128/2047/2047370.png";

       const bagWidth = 50;
       const bagHeight = 50;

       const perfumeWidth = 20;
       const perfumeHeight = 20;

var score = 0;
function restart_game() {
   
    time_remaining = 20;
    score = 0;
    perfume_speed = 3;
    }

function ImagesTouching(x1, y1, img1, x2, y2, img2) {
         if (x1 >= x2+img2.width || x1+img1.width <= x2) return false;   
         if (y1 >= y2+img2.height || y1+img1.height <= y2) return false; 
         return true;                                                       
         }
var time_remaining = 20;


function Do_a_Frame () {
   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

   ctx.fillStyle= "burlywood";
   ctx.font = "20px Arial";
   ctx.fillText("Score: " + score, 0, 20);

   bag_y = myCanvas.height - BagImg.height;
   ctx.drawImage(BagImg, bag_x, bag_y);
    ctx.fillText("Time Remaining: " + Math.round(time_remaining), 0, 45);

   if (time_remaining <= 0) {
         ctx.fillStyle= "burlywood";
         ctx.font = "bold 50px Arial";
         ctx.textAlign="center";
         ctx.fillText("Game Over", myCanvas.width / 2, myCanvas.height / 2);
         ctx.textAlign="left";
         }
   else {
         time_remaining = time_remaining - 1/40;

         perfume_y = perfume_y + 3;
         if (perfume_y > myCanvas.height) {
             perfume_y= 0;
             perfume_x= Math.random() * (myCanvas.width - PerfumeImg.width);
             }   
         }
   ctx.drawImage(PerfumeImg, perfume_x, perfume_y);

   if (ImagesTouching(bag_x, bag_y, BagImg, perfume_x, perfume_y, PerfumeImg)) {
       score= score + 1;
       perfume_x= -PerfumeImg.width;
       }
   } 
    setInterval(Do_a_Frame, 25);
    
     function MyKeyDownHandler (MyEvent) { 
  if (MyEvent.keyCode == 37 && bag_x > 0) {bag_x = bag_x - 10;}                          
  if (MyEvent.keyCode == 39 && bag_x+BagImg.width < myCanvas.width) {bag_x = bag_x+10;}  
  if (MyEvent.keyCode == 83) restart_game();                                             
  MyEvent.preventDefault();
  }
  addEventListener("keydown", MyKeyDownHandler);
  myCanvas.width = window.innerWidth - 20;                            
 myCanvas.height = window.innerHeight - 20; 

  function toggleText(buttonId) {
            
    var allText = document.querySelectorAll('.model-text');
    allText.forEach(function(text) {
        if (text !== document.getElementById(buttonId)) {
            text.style.display = "none";
            text.style.opacity = "0";
            text.style.maxHeight = "0";
        }
    });

    var textElement = document.getElementById(buttonId);
    
   
    if (textElement.style.display === "block") {
        textElement.style.display = "none";
        textElement.style.opacity = "0";
        textElement.style.maxHeight = "0";
    } else {
        textElement.style.display = "block";
        textElement.style.opacity = "1";
        textElement.style.maxHeight = "200px"; 
    }
}

