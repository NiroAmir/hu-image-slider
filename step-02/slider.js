const imagesArray = [
'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
'OHR.SpiralHill_ROW7328923046_1920x1080.jpg'
];

let currentImage = 0;
function renderImage(){
const imageURL = 'images/' + imagesArray[currentImage];
    document.getElementById('slider-image').src = imageURL;
}


function prevImage(){

     currentImage--;
     if (currentImage<0){
          currentImage = imagesArray.length -1
     }
     renderImage(currentImage);
}
function nextImage(){
     currentImage++;
      if (currentImage> imagesArray.length -1){
          currentImage = 0;
     }
     renderImage(currentImage);
}

function autoSlideShow(){
     setInterval(function(){
          nextImage();
     },1000);
}

document.getElementById('prevBtn').addEventListener('click', prevImage);
document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('autoRun').addEventListener('click', autoSlideShow);


