
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const checkoutButton = document.querySelector('.checkout');


let cart = [];

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <span>${item.quantity}</span>
            <button class="remove-item">Eliminar</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    cartTotal.textContent = total.toFixed(2);
}


addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = {
            name: `Producto ${index + 1}`,
            price: index % 2 === 0 ? 15.000 : 8.000,
            quantity: 1,
        };
        const existingItem = cart.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push(product);
        }
        updateCart();
    });
});


cartItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        const itemName = e.target.parentElement.firstElementChild.textContent;
        const itemIndex = cart.findIndex(item => item.name === itemName);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            updateCart();
        }
    }
});


checkoutButton.addEventListener('click', () => {
    alert(`Total a pagar: $${cartTotal.textContent}`);
   
});
