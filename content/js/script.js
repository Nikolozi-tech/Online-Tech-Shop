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
        name: "Hyperx keyboard",
        price: 200,
        category: "keyboard",
        stock: 100,
        isInStock: true
    },
    {
        name: "Hyperx Headset",
        price: 150,
        category: "headset",
        stock: 99,
        isInStock: true
    },
    {
        name: "Samsung Odyssey Monitor",
        price: 350,
        category: "Monitor",
        stock: 35,
        isInStock: true
    },
    {
        name: "Gaming Chair",
        price: 400,
        category: "Chair",
        stock: 56,
        isInStock: true
    }
];

for(let i = 0; i < products.length;i++){
    console.log(products[i].name);
}

function checkProductAvailability(){
    if(products[0].stock>0){
        console.log("Product is Available")
    }else{
        console.log("Product is not available")
    }
}

checkProductAvailability();

function priceChecker() {
    if (products[0].price > 1000) {
        console.log("პროდუქტი ძვირია");
    }
}
priceChecker();

function showProductDetails(name,price,stock){
    console.log("Product Name:" + name);
    console.log("Product Price:" + price);
    console.log("Product Stock:" + stock);
}

showProductDetails(productsName,productPrice,productStock);

function calculateTotalPrice(price, quantity) {
    let total = price * quantity;
    console.log("Total Price: " + total);
}

calculateTotalPrice(productPrice, productStock);