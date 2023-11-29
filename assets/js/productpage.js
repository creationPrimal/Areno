//code to count products in product page
const more = document.querySelector('.more');
const less = document.querySelector('.less');
const cartamount = document.querySelector('.cartamount');

      let counter = 0;
      // Function to update the counter and display it in the <input> element
      function updateCounter() {
        cartamount.value = counter;
      }
      

      // Event listener for the increment button
      more.addEventListener('click', function() {
        counter++;
        updateCounter();
      });

      // Event listener for the decrement button
      less.addEventListener('click', function() {
        if (counter >= 1) {
            counter--;
          updateCounter();
        }
          
      });

      // Initial counter display
      updateCounter();


// JavaScript to handle full-screen image display
const thumbnails = document.querySelectorAll('.thumbnail');
const fullscreenImageContainer = document.getElementById('fullscreen-image-container');
const fullscreenImage = document.getElementById('fullscreen-image');

thumbnails.forEach(thumbnail => {
thumbnail.addEventListener('click', () => {
    fullscreenImage.src = thumbnail.src;
    fullscreenImageContainer.style.display = 'block';
});
});

fullscreenImageContainer.addEventListener('click', () => {
fullscreenImageContainer.style.display = 'none';
});


//changing add to cart html text
const addcart = document.getElementById(`product${productId}`);
const productname = document.getElementById(`product${productId}`);
const addtocart = document.getElementById(`product${productId}`);


    
    function changeaddcarttext(){
        const productId = 1;
        const addcart = document.getElementById(`product${productId}`);
        const addtocart = document.getElementById(`product${productId}`);

        addcart.innerHTML = 'Added To Cart';
        addtocart.style.backgroundColor = 'rgb(112, 112, 253)'
        localStorage.setItem(`changedaddcarttext_${productId}`, 'true');
    }

    const productId = 1; // This should be dynamically set for each product
    const changedtrue = localStorage.getItem(`changedaddcarttext_${productId}`);

    if (changedtrue === 'true') {
    changeaddcarttext(); // Execute the function if the flag is true
    }
   const productnametext = productname.innerHTML;
    addtocart.addEventListener("click", () => {
        const cartconfirmation = confirm(`Are you sure you want to add "${productnametext}" to cart?`);
        if (cartconfirmation) {
          changeaddcarttext();
        } else {
          // If the user cancels, and you want to remove the previous change:
          const productId = 1;
          const addcart = document.getElementById(`product${productId}`);
          const addtocart = document.getElementById(`product${productId}`);

            addcart.innerHTML = 'Add to Cart';
            addtocart.style.backgroundColor = 'orangered'; // Restore original color
            localStorage.removeItem('changedaddcarttext');
                }
      });






