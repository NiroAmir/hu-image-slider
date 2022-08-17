const imagesArray = [
  {
    imageURL: 'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
    title: 'Image 1 title',
  },
  {
    imageURL: 'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
    title: 'Image 2 title',
  },
  {
    imageURL: 'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
    title: 'Image 3 title',
  },
  {
    imageURL: 'OHR.SpiralHill_ROW7328923046_1920x1080.jpg',
    title: 'Image 4 title',
  },
];


let currentImage = 0;

const autoRunButton = document.getElementById('autoRun');
const stopRunButton = document.getElementById('stop');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

const baseUrl = 'images/';
function renderImage(){
     const imageObject = imagesArray[currentImage];


     const imageURL = baseUrl + imageObject.imageURL;
    document.getElementById('slider-image').src = imageURL;
    document.getElementById('image-title').innerHTML = imageObject.title;

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
let interval = null;


function autoSlideShow(){
     if(interval != null){
          return
     }

      // This code will run only if the interval variable is null
     interval = setInterval(function(){
          
          nextImage();
     },1000);
     stopRunButton.classList.remove('d-none');
     autoRunButton.classList.add('d-none');
}

/*
The Function stop the slide show images
*/
function stopSlideShow(){
     clearInterval(interval);
     //Set the interval to null so we can run autoSlideShow again
     interval = null;
     stopRunButton.classList.add('d-none');
     autoRunButton.classList.remove('d-none');
   
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
autoRunButton.addEventListener('click', autoSlideShow);
stopRunButton.addEventListener('click', stopSlideShow);

/*  document.getElementById('slider-image').addEventListener('mouseenter',stopSlideShow)
 document.getElementById('slider-image').addEventListener('mouseleave',autoSlideShow) */
