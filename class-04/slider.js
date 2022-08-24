

const imagesArray = [
  {
    imageURL: 'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
    title: 'Longs Peak, Rocky Mountain National Park',
    credits: 'Andrew R. Slaton/Tandem Stills + Motion',
    description:
      'One of the 53 "fourteeners" in Colorado—mountains that exceed 14,000 feet—Longs Peak still manages to reach higher into the heavens than any other mountain in Rocky Mountain National Park at 14,259 feet. Thousands of climbers set off every year to attempt the summit. Some climbers will try to reach the peak of every fourteener in the US during their lifetimes—that\'s 96 different mountains.',
    featured: '2022-07-28',
  },
  {
    imageURL: 'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
    title: 'Noctilucent clouds',
    credits: 'ljphoto7/Getty Images',
    description:
      "It's around this time of year when some lucky people get to witness these rare, wondrous clouds. Known as noctilucent, or \"night-shining,\" clouds, they're the highest clouds in our sky and are only visible during summer. They're made up of icy dust glowing at the edge of space, roughly 50 miles above the planet's surface. The trick to seeing them is to gaze up into the sky at twilight, when sunlight is not reaching the Earth's surface, but is still shining through the high-altitude noctilucent clouds. These clouds occur more often at high latitudes but have been seen lower than 50° north and south.",
    featured: '2022-07-31',
  },
  {
    imageURL: 'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
    title: 'Happy birthday, Capitol Reef National Park',
    credits: 'Tim Fitzharris/Minden Pictures',
    description:
      'You won"t find a lot of solitude on the Hickman Bridge Trail, a 1.7-mile route in Capitol Reef National Park that leads to this magnificent natural arch. The trail is used by hikers, runners, and nature lovers drawn by incredible rock formations, gullies, and remnants from the ancient Fremont Culture civilization. Hickman Bridge itself is one of the best-known geologic features of the park.',
    featured: '2022-08-02',
  },
  {
    imageURL: 'OHR.SpiralHill_ROW7328923046_1920x1080.jpg',
    title: 'Bay Marker Lookout, Sydney Olympic Park, Australia',
    credits: 'ai_yoshi/Getty Images',
    description:
      "It's an easy, circular trail to the Bay Marker Lookout, but you have to make it under your own steam—sorry, no cars allowed. This is one of the five Sydney Olympic Park Markers, cone-shaped earth mounds installed for the 2000 Olympics in Australia. They are cleverly placed to look from the air like the Australian flag's Southern Cross. From the ground, the Bay Marker gives a stunning full-360-degree view of Wentworth Common—a large grassy park—and the larger Olympic Park and stadium. You can also look over Homebush Bay (the community and the body of water) to the north. It\"s a dramatic melding of urban landscape, the city skyline, the wetlands and greenery, rivers, and beaches.",
    featured: '2022-07-12',
  },
];


let currentImage = 0;

const autoRunButton = document.getElementById('autoRun');
const stopRunButton = document.getElementById('stop');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

const featured = document.getElementById('featured');
const credits = document.getElementById('credits');
const imageDiscription = document.getElementById('image-discription');
const sliderImage = document.getElementById('slider-image');
const imageTitle = document.getElementById('image-title');
const baseUrl = 'images/';

function renderImage(){
     const imageObject = imagesArray[currentImage];


     const imageURL = baseUrl + imageObject.imageURL;
    sliderImage.src = imageURL;
    imageTitle.innerHTML = imageObject.title;
    imageDiscription .innerHTML = imageObject.description;
    credits.innerHTML = imageObject.credits;
    featured.innerHTML = imageObject.featured;

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
let isSlideShowRunning = false;


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
     isSlideShowRunning = true;
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
     isSlideShowRunning = false;
   
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
autoRunButton.addEventListener('click', autoSlideShow);
stopRunButton.addEventListener('click', stopSlideShow);

function mauseStratSlideShow(){
if (isSlideShowRunning == false){
     return;
}
interval = setInterval(function () {
    nextImage();
  }, 1000);

}
function mauseStopSlideShow(){
if (isSlideShowRunning == false){
      return    ;
}
clearInterval(interval);
}


 document.getElementById('slider-image').addEventListener('mouseenter',mauseStopSlideShow)
 document.getElementById('slider-image').addEventListener('mouseleave',mauseStratSlideShow)
renderImage();