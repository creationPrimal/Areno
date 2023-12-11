 //meals slider
 const mealssplide = new Splide( '#meals-splide', {
    perPage: 10,
    gap : '1rem',
    drag : 'free',
    perMove: 1,
    padding: '0px 10px',
    snap: true,
    type: 'loop',
    pagination: false,
    autoplay: true,
    arrows: false,
    breakpoints: {
      1190: {
        perPage: 9,
        gap : '10px',
        padding: '20px',
      },
      1064: {
        perPage: 8,
        padding: '0px',
      },
      964: {
        perPage: 7,
      },
      864: {
        perPage: 6,
      },
      764: {
        perPage: 5,
        padding: { left: 0, right: 180 },
      },
      664: {
        perPage: 5,
        padding: { left: 0, right: 80 },
      },
      584: {
        perPage: 5,
        padding: { left: 0, right: 40 },
      },
      510: {
        perPage: 5,
        padding: { left: 0, right: 0 },
      },
      450: {
      perPage: 4,
      padding: { left: 0, right: 20 },
      
      },
      360: {
        perPage: 3,
        
        },
    },
    } );
    mealssplide.mount()
  
  //implementing switch tabs
  const productside = document.querySelector('.productside');
  const restaurantside = document.querySelector('.restaurantside');
  const bookingside = document.querySelector('.bookingside');
  const productswitch =document.getElementById('productswitch');
  const restaurantswitch =document.getElementById('restaurantswitch');
  const bookingswitch =document.getElementById('bookingswitch');

  productswitch.addEventListener("click", () => {
    productside.style.display = 'flex'
    restaurantside.style.display = 'none'
    bookingside.style.display = 'none'
    restaurantswitch.style.backgroundColor = 'orangered'
    bookingswitch.style.backgroundColor = 'orangered'
    productswitch.style.backgroundColor = 'orange'
  })
  restaurantswitch.addEventListener("click", () => {
    productside.style.display = 'none'
    restaurantside.style.display = 'flex'
    bookingside.style.display = 'none'
    restaurantswitch.style.backgroundColor = 'orange'
    bookingswitch.style.backgroundColor = 'orangered'
    productswitch.style.backgroundColor = 'orangered'
  })
  bookingswitch.addEventListener("click", () => {
    productside.style.display = 'none'
    restaurantside.style.display = 'none'
    bookingside.style.display = 'flex'
    restaurantswitch.style.backgroundColor = 'orangered'
    bookingswitch.style.backgroundColor = 'orange'
    productswitch.style.backgroundColor = 'orangered'
  })
  


  //loading more 
  let loadmoreButtons = document.querySelectorAll('.loadmore');

loadmoreButtons.forEach((button) => {
  let currentItem = 20;

  button.onclick = () => {
    let productboxes = [...document.querySelectorAll('.product-productpage')];
    for (var i = currentItem; i < currentItem + 20 && i < productboxes.length; i++) {
      productboxes[i].style.display = 'flex';
    }
    currentItem += 20;

    if (currentItem >= productboxes.length) {
      button.style.display = 'none'; 
    }
  };
});
