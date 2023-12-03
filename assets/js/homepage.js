      //reasons slider main slider
      const reasons = new Splide( '#reasons', {
        perPage: 4,
        drag : 'free',
        perMove: 1,
        padding: 0,
        snap: true,
        type: 'loop',
        rewind: true,
        arrows: false,
        buttons: true,
        interval: 5000,
        pagination: true,
        autoplay: true,
        breakpoints: {
          1200: {
          perPage: 3,
          },
          900: {
            perPage: 3,
            },
          850: {
            perPage: 2,
            padding: '90px',
          },
          764: {
          perPage: 3,
          padding: { left: 20, right: 0 },
          },
          678: {
            perPage: 2,
            padding: { left: 0, right: 80 },
          },
          600: {
            perPage: 1,
            padding: { left: 120, right: 120 },
          },
          580: {
            perPage: 1,
            padding: { left: 100, right: 100 },
          },
          500: {
            perPage: 1,
            padding: { left: 70, right: 70 },
          },
          460: {
            perPage: 1,
            padding: { left: 60, right: 60 },
          },
          400: {
            perPage: 1,
            padding: { left: 40, right: 40 },
          },
          350: {
            perPage: 1,
            padding: { left: 0, right: 0 },
          },
          
          },
        } );
        reasons.mount()
    
      
//preloader
window.onload = function(){
  var preloader = document.getElementById('preloader');
  var preloaderbg = document.getElementById('preloaderbg');
  preloader.style.display = 'none';
  preloaderbg.style.display = 'none';
};
    