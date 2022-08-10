console.log('slider js');

function prevImage(){
    console.log('prev clicked');
}
function nextImage(){
    console.log('next clicked');
}


document.getElementById('prevBtn').addEventListener('click', prevImage);
document.getElementById('nextBtn').addEventListener('click', nextImage);
