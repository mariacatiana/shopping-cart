function add(params) {
    //retrieve value from product name, quantity and value
let product = document.getElementById('product').value;
let nameProduct = product.split ('-') [0];
let unitaryValue = product.split('€')[1]
let quantity = document.getElementById('quantity');
alert(nameProduct);
alert(unitaryValue);
alert(quantity.value);
let price = quantity.value * unitaryValue;
alert(price);



    //calculate price and subtotal
    //Add to Cart
    //update the total purchase amount
}
function clean(params) {
    
}