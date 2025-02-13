let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    { id: 1, name: 'Prívesok na kľúče', image: 'img1.png', price: 10.20 },
    { id: 2, name: 'Univerzálny kovový náramok', image: 'img2.png', price: 20.25 },
    { id: 3, name: 'Zvonček', image: 'img3.PNG', price: 24.20 },
    { id: 4, name: 'Kovaný ozdobný pánt', image: 'img4.png', price: 31.90 },
    { id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
    { id: 6, name: 'Krbové náradie', image: 'img6.png', price: 65.50 },
    { id: 6, name: 'Svietnik', image: 'img6.png', price: 100.00 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 },
{ id: 5, name: 'Polička na knihy', image: 'img5.png', price: 42.80 }
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()} €</div>
            <button onclick="addToCard(${key})">Pridať do košíka</button>
        `;
        list.appendChild(newDiv);
    });
}
initApp();


function addToCard(key) {
    if (!listCards[key]) {
        // Copy product from list to cart
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity += 1;
        listCards[key].price = listCards[key].quantity * products[key].price;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if (value) {
            totalPrice += value.price;
            count += value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()} €</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
