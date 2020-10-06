const productsSection = document.querySelector('.our-products');

const categories = [
    [
        {
            name: 'Mask',
            desc: 'Description',
            type: 'mask',
            alt: ''
        },
        
        {
            name: 'Mask',
            desc: 'Description',
            type: 'mask',
            alt: ''
        },
        
        {
            name: 'Mask',
            desc: 'Description',
            type: 'mask',
            alt: ''
        }
    ]
];

const ids = document.querySelectorAll('.side__link');

categories.forEach((category, index)  => {
    const categoryUl = document.createElement('ul');
    categoryUl.id = ids[index].getAttribute('href').substring(1);
    category.forEach((product, index) => {
        const productLi = document.createElement('li');
        productLi.dataset.name = product.name;
        productLi.innerHTML = `<div class="product__body">
            <h3 class="product__title">
                <a href="">${product.name}-${index+1}</a>
            </h3>
            <p>${product.desc}</p>
            <small>By ApexIndia</small>
        </div>
        <div class="product__image">
            <a class="product__image__link">
                <img class="img" src="products/healthcare/${product.type}-${index+1}.jpg" alt=${product.alt}>
            </a>
            </div>`
        productLi.classList.add('product');
        categoryUl.appendChild(productLi);
    })
    categoryUl.classList.add('products');
    productsSection.appendChild(categoryUl);
});