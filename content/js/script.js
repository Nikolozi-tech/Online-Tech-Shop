function calculateDiscountedPrice(price, discount) {
    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;

    console.log(`Original Price: $${price}`);
    console.log(`Discount: ${discount}%`);
    console.log(`Discount Amount: $${discountAmount}`);
    console.log(`Final Price: $${finalPrice}`);
}

//calculateDiscountedPrice(1200, 20);

function showWelcomeMessage() {
    alert("Welcome to our Online Tech Shop!");
}



 let productName = "Macbook M3";
 let productPrice = 2200;
 let productCategory = "Tech";
 let productStock = 50;
 let IsinStock = productStock > 0;

console.log(products[0].name);
console.log(products[0].price);
console.log(products[0].category);
console.log(products[0].stock);
console.log(products[0].isInStock);

function checkProductAvailability(){
    if(product.stock>0){
        console.log("Product is Available")
    }else{
        console.log("Product is not available")
    }
}

checkProductAvailability();

function priceChecker() {
    if (product.price > 1000) {
        console.log("პროდუქტი ძვირია");
    }
}
priceChecker();

function showProductDetails(name,price,stock){
    console.log("Product Name:" + name);
    console.log("Product Price:" + price);
    console.log("Product Stock:" + stock);
}

showProductDetails(productName,productPrice,productStock);

function calculateTotalPrice(price, quantity) {
    let total = price * quantity;
    console.log("Total Price: " + total);
}

calculateTotalPrice(productPrice, productStock);