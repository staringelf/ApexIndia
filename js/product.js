/* Navigate*/

const toggleAsideButton = document.querySelector('#side-toggle');
const aside = document.querySelector('#aside');

const modal = document.querySelector('.modal');
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

function disappear(){
    modal.classList.remove('appear');
    document.body.classList.remove('unscroll');
    productImage.innerHTML = '';
}

closeCard.addEventListener('click', disappear);


imageLinks.forEach(image => image.addEventListener('click', function(e){
    const imageClicked = e.target;
    const productLi = e.target.parentNode.parentNode.parentNode;
    document.body.classList.add('unscroll');
    modal.classList.add('appear');
    productImage.innerHTML = `<img src="${imageClicked.src}" alt="">`;
    productBody.innerHTML = `<h4 class="product__title" style="text-align: center">${productLi.dataset.name}</h4>
    `;
    const properties = productLi.dataset.properties.split(',');
    const values = productLi.dataset.values.split(',');

    properties.forEach((property, index) => {
        const div = document.createElement('div');
        div.textContent = `${property}: ${values[index]}`;
        console.log(div);
        productBody.appendChild(div);
    })


}));