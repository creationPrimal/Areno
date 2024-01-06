

// code for refreshing more products in profile
let profloadmore = document.querySelector('.profloadmore')
let profcurrentItem = 20;

profloadmore.onclick = () => {
    let productboxes = [...document.querySelectorAll('.product-productpage')];
    for (var i = profcurrentItem; i < profcurrentItem + 20; i++) {
        productboxes[i].style.display = 'flex';
    }
    profcurrentItem +=20;

    if (currentItem >= productboxes.length){
        profloadmore.style.display = 'none';
    }
    
}

//share button API

function copyAndShare() {
    // Get the current webpage URL
    const currentUrl = window.location.href;
  
    // Copy the URL to the clipboard
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        console.log('URL copied to clipboard:', currentUrl);
        // Check if the share API is available
        if (navigator.share) {
          // Share the URL
          navigator.share({
            title: 'Share URL',
            url: currentUrl
          })
          .then(() => console.log('URL shared successfully'))
          .catch((error) => console.error('Error sharing URL:', error));
        } else {
          // If share API is not available, notify the user
          alert('Share API not supported in this browser');
        }
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
        alert('Failed to copy URL to clipboard');
      });
  }

  //posting div
  const showFormButton = document.getElementById('showFormButton');
  const modal = document.getElementById('myModal');
  const closeButton = document.getElementsByClassName('close')[0];

  showFormButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });









