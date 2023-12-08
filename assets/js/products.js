

// code for refreshing more products
let loadmore = document.querySelector('.loadmore')
let currentItem = 20;

loadmore.onclick = () => {
    let productboxes = [...document.querySelectorAll('.product-productpage')];
    for (var i = currentItem; i < currentItem + 20; i++) {
        productboxes[i].style.display = 'flex';
    }
    currentItem +=20;

    if (currentItem >= productboxes.length){
        loadmore.style.display = 'none';
    }
    
}


//first slider
const firstsplide = new Splide( '#first-splide', {
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
    firstsplide.mount()


 
