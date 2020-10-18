/* Navigate*/

const toggleAsideButton = document.querySelector('#side-toggle');
const sideGrp = document.querySelector('.side-grp');
const aside = document.querySelector('#aside');
const modal = document.querySelector('.modal');
const productCard = document.querySelector('.product-card');
const productImage = productCard.querySelector('.product-card__image');
const productBody = productCard.querySelector('.product-card__body');
const modalTriggers = document.querySelectorAll('.modal-trigger'); 
const closeCard = document.querySelector('.close_card');

function toggleAside(){
    aside.classList.toggle('open');
    sideGrp.classList.toggle('open');
    toggleAsideButton.classList.toggle('rotate');
}

sideGrp.addEventListener('click', function(e){
    if(!aside.classList.contains('open') || e.target === aside || e.target.classList.contains('side__item'))
            return;
        toggleAside();

});


toggleAsideButton.addEventListener('click', toggleAside);

function disappear(){
    modal.classList.remove('appear');
    document.body.classList.remove('unscroll');
    productImage.innerHTML = '';    
}

closeCard.addEventListener('click', disappear);


modalTriggers.forEach(trigger => trigger.addEventListener('click', function(e){
    const triggerClicked = e.target;
    const productLi = triggerClicked.closest('.product');
    document.body.classList.add('unscroll');
    modal.classList.add('appear');
    productImage.innerHTML = `<img src="${productLi.querySelector('.img').src}" alt="">`;
    productBody.innerHTML = `<h4 class="product-card__title">${productLi.dataset.name}</h4>
    `;
    const properties = productLi.dataset.properties.split(',');
    const values = productLi.dataset.values.split(',');

	const propertiesTable = document.createElement('table');
	propertiesTable.className = 'product-card__table';

    properties.forEach((property, index) => {
        const propertiesTr = document.createElement('tr');
        propertiesTr.innerHTML = `<th class="product-card__th">${property}:</th> <td class="product-card__td">${values[index]}</td>`;
        propertiesTable.appendChild(propertiesTr);
    })
	productBody.appendChild(propertiesTable);
}));