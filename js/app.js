let total;
clean();

function add() {
    //retrieve value from product name, quantity and value
    let product = document.getElementById('product').value;
    let quantity = document.getElementById('quantity').value;

    // Check if the selected product is valid
    if (!product || product.trim() === "") {
        alert("Select a valid product.");
        return;
    }


    // Check if the quantity entered is valid
    if (isNaN(quantity) || quantity <= 0) {
        alert("Enter a valid quantity.");
        return;
    }
    
    let nameProduct = product.split ('-') [0];
    let unitaryValue = parseFloat(product.split('€')[1]);
    

    //calculate price and subtotal
    let price = quantity * unitaryValue;
    let cart = document.getElementById('product-list');

    //Add to Cart
    cart.innerHTML = cart.innerHTML + `<section class="cart__products__product">
    <span class="blue-text">${quantity}x</span> ${nameProduct} <span class="blue-text">€${price}</span>
    </section>`;

    //update the total purchase amount
    total = total + price;
    let fieldTotal = document.getElementById ('total');
    fieldTotal.textContent = `€ ${total}`
    document.getElementById('quantity').value = ''
  

}
function clean() {
    total = 0;
    document.getElementById('product-list').innerHTML='';
    document.getElementById ('total').textContent='€ 0,00';    
}