/* Navigate*/

const toggleAsideButton = document.querySelector('#side-toggle');
const aside = document.querySelector('#aside');


const productCard = document.querySelector('.product-card');
const productImage = productCard.querySelector('.product-card__image');
const productBody = productCard.querySelector('.product-card__body');
const imageLinks = document.querySelectorAll('.product__image__link'); 
const closeCard = document.querySelector('.close_card');

function toggleAside(){
    aside.classList.toggle('open');
    toggleAsideButton.classList.toggle('rotate');
}

toggleAsideButton.addEventListener('click', toggleAside);

closeCard.addEventListener('click', () => {
    productCard.classList.remove('appear');
    document.body.classList.remove('unscroll');
    productImage.innerHTML = '';
})

imageLinks.forEach(image => image.addEventListener('click', function(e){
    const imageClicked = e.target;
    document.body.classList.add('unscroll');
    productCard.classList.add('appear');
    productImage.innerHTML = `<img src="${imageClicked.src}" alt="">`;
    productBody.innerHTML = `<h4>${e.target.parentNode.parentNode.parentNode.dataset.name}</h4>`;
}));