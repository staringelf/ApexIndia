const productsSection = document.querySelector('.our-products');

const categories = [
    [
        {
            name: 'Non Woven Face Mask',
            details: {
                BFE: '>95%',
                Loop: 'Ear-Loop',
                'Pieces per box': '100pcs/box',
                Size: '17.5 x 9.5cm'
            },
            desc: '3Ply, 25G + 25G + 25G',
            type: 'mask',
            alt: ''
        },
        
        {
            name: 'Non Woven Face Mask(Children)',
            details: {
                BFE: '>95%',
                Loop: 'Ear-Loop',
                'Pieces per box': '100pcs/box',
                Size: '14.5 x 9.0cm'
            },
            desc: '3Ply, 25G + 25G + 25G',
            type: 'mask',
            alt: ''
        },
        
        {
            name: 'Non Woven Face Mask',
            details: {
                BFE: '>95%',
                Loop: 'Ear-Loop',
                'Pieces per box': '100pcs/box',
                Size: '14.5 x 9.0cm'
            },
            desc: 'For Medical Use',
            type: 'mask',
            alt: ''
        },
        
        {
            name: 'KN 95 Face Mask',
            details: {
                BFE: '>95%',
                Loop: 'Ear-Loop',
                'Pieces per box': '100pcs/box',
                Size: '14.5 x 9.0cm'
            },
            desc: '5 Layers',
            type: 'mask',
            alt: ''
        },
        
        {
            name: 'KN95 with respiratory valve',
            details: {
                BFE: '>95%',
                Loop: 'Ear-Loop',
                'Pieces per box': '100pcs/box',
                Size: '14.5 x 9.0cm'
            },
            desc: '5 Layers',
            type: 'mask',
            alt: ''
        },
        
        {
            name: 'KN95 Mask',
            details: {
                BFE: '>95%',
                Loop: 'Ear-Loop',
                'Pieces per box': '100pcs/box',
                Size: '14.5 x 9.0cm'
            },
            desc: '5 Layers',
            type: 'mask',
            alt: ''
        }

    ],
    [
        {
            name: 'Isolation Gown',
            details: {
                BFE: '>95%',
                Loop: 'Ear-Loop',
                'Pieces per box': '100pcs/box',
                Size: '14.5 x 9.0cm'
            },
            desc: 'Non Sterile, 35 GSM',
            type: 'disposable good',
            alt: ''
        },
        
        {
            name: 'Disposable SMS Medical Gown',
            details: {
                BFE: '>95%',
                Loop: 'Ear-Loop',
                'Pieces per box': '100pcs/box',
                Size: '14.5 x 9.0cm'
            },
            desc: '40 GSM',
            type: 'disposable good',
            alt: ''
        },
        
        {
            name: 'Disposable Cap ',
            details: {
                BFE: '>95%',
                Loop: 'Ear-Loop',
                'Pieces per box': '100pcs/box',
                Size: '14.5 x 9.0cm'
            },
            desc: 'Non Woven',
            type: 'disposable good',
            alt: ''
        },
         

    ]

];

const ids = document.querySelectorAll('.side__link');
const productTypes = ['mask', 'disposable'];

categories.forEach((category, outerindex)  => {
    const categoryUl = document.createElement('ul');
    categoryUl.id = ids[outerindex].getAttribute('href').substring(1);
    category.forEach((product, index) => {
        const productLi = document.createElement('li');
        productLi.dataset.name = product.name;
            const properties = Object.keys(product.details);
            const values = Object.values(product.details);
            productLi.dataset.properties = properties;
            productLi.dataset.values = values;
        productLi.innerHTML = `<div class="product__body">
            <h3 class="product__title">
                <a class="modal-trigger">${product.name}</a>
            </h3>
            <p>${product.desc}</p>
            <small>By ApexIndia</small>
        </div>
        <div class="product__image noSelect">
            <a class="product__image__link modal-trigger">
                <img class="img noSelect" src="products/healthcare/${productTypes[outerindex]}-${index+1}.jpg" alt="">
            </a>
            </div>`
        productLi.classList.add('product');
        categoryUl.appendChild(productLi);
    })
    categoryUl.classList.add('products');
    productsSection.appendChild(categoryUl);
});

