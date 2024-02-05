     
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

      
//preloader
window.onload = function(){
  var preloader = document.getElementById('preloader');
  var preloaderbg = document.getElementById('preloaderbg');
  preloader.style.display = 'none';
  preloaderbg.style.display = 'none';
};



// Get all buttons with the class '.notification-menu'
const profileMenuButtons = document.querySelectorAll('.profile-menu');
const profileMenuDiv = document.querySelector('.profilemenudiv');

// Loop through each button and attach event listeners
profileMenuButtons.forEach(button => {
  button.addEventListener('click', () => {
    profileMenuDiv.style.display = 'flex';
  });
});

// Add event listener to close the notification when clicking outside
const profileDarkSide = document.querySelector('.profiledarkside');
profileDarkSide.addEventListener('click', () => {
  profileMenuDiv.style.display = 'none';
});
  

//notification switch
const on = document.querySelector('.on');
const off = document.querySelector('.off');

// Check if there is a saved state in local storage
const savedState = localStorage.getItem('notificationSwitchState');

if (savedState === 'off') {
  turnOff();
} else {
  // Default to 'on' if the value is empty or not present
  turnOn();
  // Save the default state in local storage
  localStorage.setItem('notificationSwitchState', 'on');
}

off.addEventListener("click", () => {
  turnOff();
  // Save the state in local storage
  localStorage.setItem('notificationSwitchState', 'off');
});

on.addEventListener("click", () => {
  turnOn();
  // Save the state in local storage
  localStorage.setItem('notificationSwitchState', 'on');
});

function turnOn() {
  off.style.backgroundColor = 'white';
  on.style.backgroundColor = 'rgb(42, 255, 42)';
  on.style.border = '1px rgba(0, 128, 0, 0) solid';
  off.style.border = '1px rgba(0, 0, 0, 0.521) solid';
}

function turnOff() {
  off.style.backgroundColor = 'rgb(42, 255, 42)';
  on.style.backgroundColor = 'white';
  on.style.border = '1px rgba(0, 0, 0, 0.521) solid';
  off.style.border = '1px rgba(0, 128, 0, 0) solid';
}
  
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


 