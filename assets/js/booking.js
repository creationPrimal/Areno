// code for refreshing more activities
let loadmore = document.querySelector('.loadmore')
let currentItem = 6;

loadmore.onclick = () => {
    let productboxes = [...document.querySelectorAll('.event')];
    for (var i = currentItem; i < currentItem + 6; i++) {
        productboxes[i].style.display = 'flex';
    }
    currentItem +=6;

    if (currentItem >= productboxes.length){
        loadmore.style.display = 'none';
    }
    
}
