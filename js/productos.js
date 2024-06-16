const products = [
    {
        name: 'Air Jordan 1',
        image: 'images/AirJordan1.jpeg',
        price: 1250500,
        quantity: 3,
    },
    {
        name: 'Lebron III',
        image: 'images/LebronIII.jpeg', 
        price: 990400,
        quantity: 4,
    },
    {
        name: 'Adidas Exhibit B',
        image: 'images/AdidasExhibitB.jpg', 
        price: 450800,
        quantity: 6,
    },
    {
        name: 'Reebok Fluxlite Cross',
        image: 'images/ReebokFluxliteCross.jpg',
        price: 412300,
        quantity: 5,
    }
];

const productList = document.getElementById('product-list');

// Función para calcular el total por producto
const calcularTotal = (price, quantity) => {
    return price * quantity;
};

// Iterar sobre el arreglo de productos y crear elementos HTML
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.classList.add('product-image');

    const productName = document.createElement('span');
    productName.textContent = product.name;
    productName.classList.add('product-name');

    const productPrice = document.createElement('span');
    productPrice.textContent = `$${product.price.toLocaleString()}`;
    productPrice.classList.add('product-price');

    const productQuantity = document.createElement('span');
    productQuantity.textContent = product.quantity;
    productQuantity.classList.add('product-quantity');

    const productTotal = document.createElement('span');
    const total = calcularTotal(product.price, product.quantity);
    productTotal.textContent = `$${total.toLocaleString()}`;
    productTotal.classList.add('product-total');

    // Agregar elementos al contenedor del producto
    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(productQuantity);
    productItem.appendChild(productTotal);

    productList.appendChild(productItem);
});





    