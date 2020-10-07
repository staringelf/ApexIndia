const productsSection = document.querySelector('.our-products');

const categories = [
    [
        {
            name: 'Chappati Making Machine',
            details: {
                Material: 'Stainless Steel',
                Voltage: '220 - 380 V',
                Frequency: '50 - 60 Hz',
                'Dough capacity': '20kg - 25kg' 
            },
            desc: 'Fully Automatic',
            type: 'food-processing',
            alt: ''
        },
        
        {
            name: 'Atta Dough Kneader',
            details: {
                Material: 'Stainless Steel',
                Voltage: '220 - 380 V',
                Frequency: '50 - 60 Hz',
                'Dough capacity': '20kg - 25kg' 
            },
            desc: 'and',
            type: 'food-processing',
            alt: ''
        },
        
        {
            name: 'Bio Mass Burner',
            desc: 'Description',
            details: {
                material: 'Stainless Steel',
                voltage: '220 - 380 V',
                frequency: '50 - 60 Hz',
                'Dough capacity': '20kg - 25kg' 
            },
            type: 'food-processing',
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
        const properties = Object.keys(product.details);
        const values = Object.values(product.details);
        productLi.dataset.properties = properties;
        productLi.dataset.values = values;
        productLi.innerHTML = `<div class="product__body">
            <h3 class="product__title">
                <a href="">${product.name}</a>
            </h3>
            <p>${product.desc}</p>
            <small>By ApexIndia</small>
        </div>
        <div class="product__image">
            <a class="product__image__link">
                <img class="img" src="products/food-processing/food-processing-${index+1}.jpg" alt=${product.alt}>
            </a>
            </div>`
        productLi.classList.add('product');
        categoryUl.appendChild(productLi);
    })
    categoryUl.classList.add('products');
    productsSection.appendChild(categoryUl);
})


/*
<ul class="products products--masks" id="masks">
<li class="product">
    <div class="product__body">
        <h3 class="product__title">
            <a href="">A great product</a>
        </h3>
        <p>Description of the great product</p>
        <small>By Great Products(TM)</small>
    </div>
    <div class="product__image">
        <a>
            <img class="img" src="Images/b.jpg" alt="Description of the great product's appearance">
        </a>
        </div>
</li>
*/