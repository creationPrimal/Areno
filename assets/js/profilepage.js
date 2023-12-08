

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









