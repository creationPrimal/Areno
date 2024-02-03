

//expanding menu bar
const menu = document.querySelector('.nav-menu');
const secondmenu = document.querySelector('.second-menu');
const minimize = document.querySelector('.minimize-menu');
const minimizediv = document.querySelector('.menu');
const darkside = document.querySelector('.darkside');
const menudiv = document.querySelector('.menudiv');

  menu.addEventListener("click", () => {
      menudiv.style.display = 'flex'
      minimizediv.style.display = 'flex'
      minimizediv.style.width = '100%'
      darkside.style.width = '100%'
  })

  minimize.addEventListener("click", () => {
      menudiv.style.display = 'none'
      minimizediv.style.width = '0px'
      darkside.style.width = 'auto'
  })
  darkside.addEventListener("click", () => {
      menudiv.style.display = 'none'
      minimizediv.style.width = '0px'
      darkside.style.width = 'auto'
  })
  

//implementing dark mode

const darkmodeButton = document.getElementById('darkmode');
const body = document.body;

  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('isDarkMode', isDarkMode);
  }

  darkmodeButton.addEventListener('click', toggleDarkMode);

  // Check if dark mode is stored in local storage on page load
  window.addEventListener('load', () => {
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    if (isDarkMode) {
      body.classList.add('dark-mode');
    }
  });

//expanding categories in filter menu div

const filtermenudiv = document.getElementById('filtercategory')
const morefiltercategory = document.getElementById('morefiltercategory')
const filtercategoriesdiv = document.querySelector('.filtercategoriesdiv')

  filtermenudiv.addEventListener("click", () => {
    if (filtercategoriesdiv.style.height === '264px' || filtercategoriesdiv.style.height === '') {
      filtercategoriesdiv.style.height = 'auto';
      filtermenudiv.textContent = 'Minimize Categories'
      morefiltercategory.textContent = 'View Less'
      filtermenudiv.style.backgroundColor = 'rgba(0, 0, 0, 0)'
      filtermenudiv.style.border = '1px solid rgba(0, 0, 0, 0.253)'
      
    } else {
      filtercategoriesdiv.style.height = '264px';
      filtermenudiv.textContent = 'Categories'
      morefiltercategory.textContent = 'View More'
      filtermenudiv.style.backgroundColor = 'rgba(128, 128, 128, 0.226)'
      filtermenudiv.style.border = '1px solid rgba(0, 0, 0, 0)'

      
    }
    
    
  });

  morefiltercategory.addEventListener("click", () => {
    if (filtercategoriesdiv.style.height === '264px' || filtercategoriesdiv.style.height === '') {
      filtercategoriesdiv.style.height = 'auto';
      filtermenudiv.textContent = 'Minimize Categories'
      morefiltercategory.textContent = 'View Less'
      filtermenudiv.style.backgroundColor = 'rgba(0, 0, 0, 0)'
      filtermenudiv.style.border = '1px solid rgba(0, 0, 0, 0.253)'
      
    } else {
      filtercategoriesdiv.style.height = '264px';
      filtermenudiv.textContent = 'Categories'
      morefiltercategory.textContent = 'View More'
      filtermenudiv.style.backgroundColor = 'rgba(128, 128, 128, 0.226)'
      filtermenudiv.style.border = '1px solid rgba(0, 0, 0, 0)'

      
    }
  });


//expanding filter menu bar
const filter = document.querySelector('.filter-icon');
const filtermenu = document.querySelector('.filtermenu');
const filterdarkside = document.querySelector('.filterdarkside');
const filterdiv = document.querySelector('.filtermenudiv');

  filter.addEventListener("click", () => {
      filtermenu.style.width = '100%'
      filterdiv.style.transform = 'translateX(0%)'
      filterdarkside.style.width = '100%'
  })
  filterdarkside.addEventListener("click", () => {
    filterdiv.style.transform = 'translateX(100%)'
    filtermenu.style.width = 'auto'
    filterdarkside.style.width = 'auto'
  })


function goBack() {
  // Go back to the previous page
  window.history.back();
}










