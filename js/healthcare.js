const products = [
    {
        title: 'Mask 1',
        src: '../Images/3.jpg',
        desc: 'Nothing'
    },
]

const ul = document.querySelector('ul');
ul.classList.add('products');

products.forEach(product => {
    ul.innerHTML = `<li class="product">
        <div class="product__body">
            <h3 class="product__title">
                <a href="">${product.title}</a>
            </h3>
            <p>${product.desc}</p>
            <small>By Great Products(TM)</small>
        </div>
        <div class="product__image">
            <a>
                <img class="img" src="${product.src}" alt="${product.desc}">
            </a>
            </div>
        </li>
        `
})