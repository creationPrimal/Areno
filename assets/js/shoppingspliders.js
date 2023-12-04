
//category splider
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

  //products slider
//second slider
const secondsplide = new Splide( '#second-splide', {
  perPage: 4,
  gap : '1rem',
  drag : 'free',
  perMove: 1,
  padding: { left: 0, right: 80 },
  snap: true,
  type: 'loop',
  pagination: false,
  autoplay: false,
  breakpoints: {

    1200: {
    perPage: 4,
    padding: { left: 0, right: 20 },
    },
    1104: {
    perPage: 3,
    padding: { left: 0, right: 100 },
    },
    964: {
    perPage: 3,
    padding: { left: 0, right: 50 },
    },
    884: {
    perPage: 2,
    padding: { left: 0, right: 180 },
    },
    764: {
    perPage: 3,
    padding: { left: 0, right: 20 },
    },
    678: {
      perPage: 2,
      padding: { left: 0, right: 170 },
    },
    610: {
      perPage: 2,
      padding: { left: 0, right: 130 },
    },
    580: {
      perPage: 2,
      padding: { left: 0, right: 80 },
    },
    520: {
      perPage: 2,
      padding: { left: 0, right: 30 },
    },
    470: {
      perPage: 2,
      padding: { left: 0, right: 0 },
    },
    440: {
      perPage: 1,
      padding: { left: 0, right: 170 },
    },
    390: {
      perPage: 1,
      padding: { left: 0, right: 120 },
    },
    335: {
      perPage: 1,
      padding: { left: 0, right: 50 },
    },
    },
  } );
  secondsplide.mount()

//third slider
const thirdsplide = new Splide( '#third-splide', {
  perPage: 4,
  gap : '1rem',
  drag : 'free',
  perMove: 1,
  padding: { left: 0, right: 80 },
  snap: true,
  type: 'loop',
  pagination: false,
  autoplay: false,
  breakpoints: {

    1200: {
    perPage: 4,
    padding: { left: 0, right: 20 },
    },
    1104: {
    perPage: 3,
    padding: { left: 0, right: 100 },
    },
    964: {
    perPage: 3,
    padding: { left: 0, right: 50 },
    },
    884: {
    perPage: 2,
    padding: { left: 0, right: 180 },
    },
    764: {
    perPage: 3,
    padding: { left: 0, right: 20 },
    },
    678: {
      perPage: 2,
      padding: { left: 0, right: 170 },
    },
    610: {
      perPage: 2,
      padding: { left: 0, right: 130 },
    },
    580: {
      perPage: 2,
      padding: { left: 0, right: 80 },
    },
    520: {
      perPage: 2,
      padding: { left: 0, right: 30 },
    },
    470: {
      perPage: 2,
      padding: { left: 0, right: 0 },
    },
    440: {
      perPage: 1,
      padding: { left: 0, right: 170 },
    },
    390: {
      perPage: 1,
      padding: { left: 0, right: 120 },
    },
    335: {
      perPage: 1,
      padding: { left: 0, right: 50 },
    },
    },
  } );
  thirdsplide.mount()

//fourth slider
const fourthsplide = new Splide( '#fourth-splide', {
  perPage: 4,
  gap : '1rem',
  drag : 'free',
  perMove: 1,
  padding: { left: 0, right: 80 },
  snap: true,
  type: 'loop',
  pagination: false,
  autoplay: false,
  breakpoints: {

    1200: {
    perPage: 4,
    padding: { left: 0, right: 20 },
    },
    1104: {
    perPage: 3,
    padding: { left: 0, right: 100 },
    },
    964: {
    perPage: 3,
    padding: { left: 0, right: 50 },
    },
    884: {
    perPage: 2,
    padding: { left: 0, right: 180 },
    },
    764: {
    perPage: 3,
    padding: { left: 0, right: 20 },
    },
    678: {
      perPage: 2,
      padding: { left: 0, right: 170 },
    },
    610: {
      perPage: 2,
      padding: { left: 0, right: 130 },
    },
    580: {
      perPage: 2,
      padding: { left: 0, right: 80 },
    },
    520: {
      perPage: 2,
      padding: { left: 0, right: 30 },
    },
    470: {
      perPage: 2,
      padding: { left: 0, right: 0 },
    },
    440: {
      perPage: 1,
      padding: { left: 0, right: 170 },
    },
    390: {
      perPage: 1,
      padding: { left: 0, right: 120 },
    },
    335: {
      perPage: 1,
      padding: { left: 0, right: 50 },
    },
    },
  } );
  fourthsplide.mount()

//fifth slider
const fifthsplide = new Splide( '#fifth-splide', {
  perPage: 4,
  gap : '1rem',
  drag : 'free',
  perMove: 1,
  padding: { left: 0, right: 80 },
  snap: true,
  type: 'loop',
  pagination: false,
  autoplay: false,
  breakpoints: {

    1200: {
    perPage: 4,
    padding: { left: 0, right: 20 },
    },
    1104: {
    perPage: 3,
    padding: { left: 0, right: 100 },
    },
    964: {
    perPage: 3,
    padding: { left: 0, right: 50 },
    },
    884: {
    perPage: 2,
    padding: { left: 0, right: 180 },
    },
    764: {
    perPage: 3,
    padding: { left: 0, right: 20 },
    },
    678: {
      perPage: 2,
      padding: { left: 0, right: 170 },
    },
    610: {
      perPage: 2,
      padding: { left: 0, right: 130 },
    },
    580: {
      perPage: 2,
      padding: { left: 0, right: 80 },
    },
    520: {
      perPage: 2,
      padding: { left: 0, right: 30 },
    },
    470: {
      perPage: 2,
      padding: { left: 0, right: 0 },
    },
    440: {
      perPage: 1,
      padding: { left: 0, right: 170 },
    },
    390: {
      perPage: 1,
      padding: { left: 0, right: 120 },
    },
    335: {
      perPage: 1,
      padding: { left: 0, right: 50 },
    },
    },
  } );
  fifthsplide.mount()

  //shopping main slider
const shoppingmainad = new Splide( '#shopping-main-ad', {
  perPage: 1,
  drag : 'free',
  perMove: 1,
  padding: 0,
  snap: true,
  type: 'fade',
  rewind: true,
  arrows: false,
  interval: 10000,
  pagination: true,
  autoplay: true,
  breakpoints: {
    1200: {
    perPage: 1,
    },
    
    764: {
    perPage: 1,
    },
    678: {
      perPage: 1,
    },
    610: {
      perPage: 1,
    },
    580: {
      perPage: 1,
    },
    
    },
  } );
  shoppingmainad.mount()

