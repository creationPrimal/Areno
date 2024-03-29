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
  const productswitch =document.getElementById('productswitch');
  const restaurantswitch =document.getElementById('restaurantswitch');

  productswitch.addEventListener("click", () => {
    productside.style.display = 'flex';
    restaurantside.style.display = 'none';
    productswitch.style.backgroundColor = 'orangered';
    productswitch.style.color = 'white';
    restaurantswitch.style.backgroundColor = 'white';
    restaurantswitch.style.color = 'black';
    productswitch.style.border = 'none';
    restaurantswitch.style.border = '1px solid rgba(0, 0, 0, 0.493)';
  })
  restaurantswitch.addEventListener("click", () => {
    productside.style.display = 'none';
    restaurantside.style.display = 'flex';
    productswitch.style.backgroundColor = 'white';
    productswitch.style.color = 'black';
    productswitch.style.border = '1px solid rgba(0, 0, 0, 0.493)';
    restaurantswitch.style.backgroundColor = 'orangered';
    restaurantswitch.style.color = 'white';
    restaurantswitch.style.border = 'none';
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
