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



 const products = [
    {
    name : "Macbook M3",
    price : 2200,
    category : "Laptop",
    stock : 50,
    isInStock : true
    },
    {
        Name: "Hyperx Keyboard",
        price: 200,
        category: "Keyboard",
        stock: 100,
        isInStock: true
    },
    {
        Name: "Hyperx Headset",
        price: 150,
        category: "Headset",
        stock: 99,
        isInStock: true
    },
    {
        Name: "Samsung Odyssey Monitor",
        price: 350,
        category: "Monitor",
        stock: 35,
        isInStock: true
    },
    {
        Name: "Gaming Chair",
        price: 400,
        category: "Chair",
        stock: 56,
        isInStock: true
    }
];

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

showProductDetails("Macbook",2200,50);

function calculateTotalPrice(price, quantity) {
    let total = price * quantity;
    console.log("Total Price: " + total);
}

calculateTotalPrice(2200, 2);