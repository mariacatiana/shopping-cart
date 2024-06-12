function add(params) {
    //retrieve value from product name, quantity and value
let product = document.getElementById('product').value;
let nameProduct = product.split ('-') [0];
let unitaryValue = product.split('€')[1]
let quantity = document.getElementById('quantity').value;
//calculate price and subtotal
let price = quantity * unitaryValue;
let cart = document.getElementById('product-list');
//Add to Cart
cart.innerHTML = cart.innerHTML + `<section class="cart__products__product">
<span class="blue-text">${quantity}x</span> ${nameProduct} <span class="blue-text">${price}</span>
</section>`;
    
    
    //update the total purchase amount
}
function clean(params) {
    
}