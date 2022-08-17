let currentPageId = 'home-page';
let currentActiveLinkId = 'home-page-link';

function showPage(linkId,pageIdToShow) {
  console.log('you clicked me');
  if (currentPageId == pageIdToShow) {
    return;
  }

  console.log(' after the if');

  // Show the page
  document.getElementById(pageIdToShow).classList.remove('d-none');

  // Hide the page
  document.getElementById(currentPageId).classList.add('d-none');
  
  document.getElementById(linkId).classList.add('active');
  document.getElementById(currentActiveLinkId).classList.remove('active');


  currentPageId = pageIdToShow;
  currentActiveLinkId = linkId;
}

function makeMenuLinkChangePage(linkId, pageToShow) {
  const pageLinkElement = document.getElementById(linkId);
  pageLinkElement.addEventListener('click', function () {
    showPage(linkId,pageToShow);
  });
}

makeMenuLinkChangePage('home-page-link', 'home-page');
makeMenuLinkChangePage('about-page-link', 'about-page');
makeMenuLinkChangePage('contact-page-link', 'contact-page');
