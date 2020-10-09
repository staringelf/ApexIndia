const productsSection = document.querySelector('.our-products');

const categories = [
    [
        {
            name: 'Chappati Making Machine',
            details: {
                Capacity: '1000 Chapati per hour',
                'Chapati Size': '5 - 6"',
                Frequency: '50 - 60 Hz',
                Voltage: '380 - 440V',
				'Power Source': 'Electric'
            },
            desc: 'Fully Automatic, Electric',
            type: 'food-processing',
            alt: 'Fully Automatic chappati puri making machine'
        },
        
        {
            name: 'Semi Automatic Chappati Making Machine',
            details: {
                Capacity: '800 Chapati per hour',
                'Chapati Size': '4 - 5"',
                Frequency: '60 Hz',
                Voltage: '380 - 440V',
                'Power Source': 'Electric'
            },
            desc: 'Semi Automatic',
            type: 'food-processing',
            alt: ''
        },
        
        {
            name: 'Semi Automatic Roti Making Machine',
            desc: 'Description',
            details: {
                Material: 'Stainless Steel',
                Capacity: '2000 Chapati per hour',
                'Chapati Size': '5-6" and 4-5"',
                Frequency: '50 - 60 Hz',
                Voltage: '380-440V'
            },
            type: 'food-processing',
            alt: ''
        },

        {
            name: 'Biomass Pellet Stove',
            desc: 'Canteen/Hotels',
            details: {
                Material: 'Stainless Steel',
                Voltage: '220V - 380V',
                Frequency: '50 - 60 Hz',
                'Power Source': 'Electric'
            },
            type: 'food-processing',
            alt: ''
        },
        
        {
            name: 'Atta Dough Kneader',
            desc: 'Stainless Steel',
            details: {
                Material: 'Stainless Steel',
                Voltage: '220V - 380V',
                Frequency: '50 - 60 Hz',
                'Dough Capacity': '20kg - 25kg'
            },
            type: 'food-processing',
            alt: ''
        },
        
        {
            name: 'U-Drum Dough Kneading Machine',
            desc: 'Stainless Steel',
            details: {
                Material: 'Stainless Steel',
                Voltage: '220V - 380V',
                Frequency: '50 - 60 Hz',
                'Dough Capacity': '20kg - 25kg'
            },
            type: 'food-processing',
            alt: ''
        },
        
        {
            name: 'Potato Peeler Machine',
            desc: 'Stainless Steel',
            details: {
                Material: 'Stainless Steel',
                Voltage: '220V - 380V',
                Frequency: '50 - 60 Hz',
                'Dough Capacity': '20kg - 25kg'
            },
            type: 'food-processing',
            alt: ''
        },

        {
            name: '10 Kg Potato Peeling Machine',
            desc: 'Stainless Steel',
            details: {
                Material: 'Stainless Steel',
                'Tank Capacity': '10 Kg',
                Voltage: '220V - 380V',
                Frequency: '50 - 60 Hz',
                'Machine Weight': '55Kg',
                'Production Capacity': '300 - 400kg/day'
            },
            type: 'food-processing',
            alt: ''
        },
        
        {
            name: 'Peda Cutting Machine',
            desc: 'Stainless Steel',
            details: {
                Material: 'Stainless Steel',
                Voltage: '220V - 380V',
                Frequency: '50 - 60 Hz',
                'Power Source': 'Electric',
                'Surface Finishing': 'Polished'
            },
            type: 'food-processing',
            alt: ''
        },
    ],

    [
        {    
            name: 'Stainless Steel Dining Table',
            desc: 'Mess - Canteen, Hotels',
            details: {
                'Base Type': 'Stainless Steel',
                Usage: 'Restaurants/Canteens',
                Size: '8.3 * 3.5',
                Voltage: '220V - 380V',
                Frequency: '50 - 60 Hz',
                'Power Source': 'Electric',
                'Surface Finish': 'Mirror Finish'
            },
            type: 'kitchen-equipment',
            alt: ''
        },
        
        {    
            name: 'Khoya Making Machine',
            desc: 'Stainless Steel',
            details: {
                Capacity: '100 Litres',
                Material: 'Stainless Steel',
                'Equipment Type': 'Milk Storage Tanks',
                'Power Source': 'Electric',
            },
            type: 'kitchen-equipment',
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
        <div class="product__image noSelect">
            <a class="product__image__link">
                <img class="img noSelect" src="products/food-processing/food-processing-${index+1}.JPG" alt="">
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