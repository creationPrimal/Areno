

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



 
