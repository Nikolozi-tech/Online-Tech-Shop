const products = [
    {
        id: 1,
        name: "Macbook M3",
        description: "Powerful Apple laptop with M3 chip",
        price: 2200,
        category: "Laptop",
        stock: 50,
        isInStock: true
    },
    {
        id: 2,
        name: "Hyperx Keyboard",
        description: "Mechanical gaming keyboard with RGB lights",
        price: 200,
        category: "Accessories",
        stock: 100,
        isInStock: true
    },
    {
        id: 3,
        name: "Hyperx Headset",
        description: "Gaming headset with high quality sound",
        price: 150,
        category: "Audio",
        stock: 99,
        isInStock: true
    },
    {
        id: 4,
        name: "Samsung Odyssey",
        description: "High refresh rate gaming monitor",
        price: 350,
        category: "Monitors",
        stock: 35,
        isInStock: true
    },
    {
        id: 5,
        name: "Gaming Chair",
        description: "Comfortable chair for long gaming sessions",
        price: 600,
        category: "Furniture",
        stock: 56,
        isInStock: true
    },
    {
        id: 6,
        name: "Iphone 17 Pro",
        description: "Latest Apple smartphone",
        price: 1500,
        category: "Phones",
        stock: 50,
        isInStock: true
    },
    {
        id: 7,
        name: "Razer Pro x3",
        description: "Professional gaming keyboard",
        price: 60,
        category: "Keyboards",
        stock: 150,
        isInStock: true
    },
    {
        id: 8,
        name: "Ducky one-two mini",
        description: "Compact mechanical keyboard",
        price: 500,
        category: "Keyboards",
        stock: 20,
        isInStock: true
    },
    {
        id: 9,
        name: "Scroll x-2",
        description: "Electric scooter with high speed",
        price: 2500,
        category: "Scooters",
        stock: 20,
        isInStock: true
    }
];



const cart = [
    {
        productId: 1,
        quantity: 2
    },
    {
        productId: 3,
        quantity: 1
    },
    {
        productId: 6,
        quantity: 3
    }
];



function getTotalQuantity(){

    let totalQuantity = 0;

    for(const item of cart){
        totalQuantity += item.quantity;
    }

    return totalQuantity;
}


console.log("Total items in cart:", getTotalQuantity());



const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const productDetailsButton = document.getElementById("detailsButton");

 
function createProductCard(product){
    return `
       <div class="product-card">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p class="price">Price is ${product.price} USD</p>
            <a class="details-button" href="product-details.html?id=${product.id}">view details</a>
        </div>`;
}

function renderProducts(productList){
    const productGridId = document.getElementById("productGrid");

    let productCardHtml = "";

    if(productList.length === 0){
        productGridId.innerHTML = "<p>No products found</p>";
        return;
    }

    for (const product of productList) {
        productCardHtml += createProductCard(product);
    }

    productGrid.innerHTML = productCardHtml;
}



 function showProducts(){
    renderProducts(products)
 }
function applyFilters(){

    const searchText = searchInput.value.toLowerCase();

    const selectedCategory = categoryFilter.value;

    const selectedPrice = priceFilter.value;


    const filteredProducts = [];


    for(const product of products){

        const productName = product.name.toLowerCase();

        const productCategory = product.category;


        const matchesSearch =
        productName.includes(searchText) ||
        productCategory.toLowerCase().includes(searchText);


        const matchesCategory =
        selectedCategory === "All" ||
        productCategory === selectedCategory;


        const matchesPrice = matchesPriceFilter(product, selectedPrice);



        if(matchesSearch && matchesCategory && matchesPrice){

            filteredProducts.push(product);

        }
    }


    renderProducts(filteredProducts);

}



function matchesPriceFilter(product, selectedPrice){

    if(selectedPrice === "All"){
        return true;
    }


    if(selectedPrice === "under-100" && product.price < 100){
        return true;
    }


    if(selectedPrice === "100-500" && product.price >= 100 && product.price <= 500){
        return true;
    }


    if(selectedPrice === "500-1000" && product.price >= 500 && product.price <= 1000){
        return true;
    }


    if(selectedPrice === "over-1000" && product.price > 1000){
        return true;
    }


    if(selectedPrice === "over-2000" && product.price > 2000){
        return true;
    }


    return false;
}

if(searchInput && categoryFilter && priceFilter && clearSearchBtn){
searchInput.addEventListener("input", applyFilters);

categoryFilter.addEventListener("change", applyFilters);

priceFilter.addEventListener("change", applyFilters);



clearSearchBtn.addEventListener("click", () => {

    searchInput.value = "";

    categoryFilter.value = "All";

    priceFilter.value = "All";

    renderProducts(products);
});
}

function getProductById(id){
    for (const product of products){
        if(product.id === id){
            return product;
        }
    }

    return null;
}

function renderProductDetails(){
    
    const productDetails = document.getElementById("productDetails");

    console.log(productDetails);
    if(!productDetails){
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const productId = Number(urlParams.get("id"));

    const product = getProductById(productId);

    if(product === null){
        productDetails.innerHTML = "<p>Product not found</p>";
        return;
    }
    
    productDetails.innerHTML = `
    <div class="product-details-card">
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
        <p>${product.description}</p>
        <p class="price">Price: ${product.price} USD</p>
        <p>In Stock: ${product.isInStock ? "Yes" : "No"}</p>
        <p>Stock: ${product.stock}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
    `;
}

renderProductDetails(); 

function addToCart(productId){
    const existingCartItem = findCartItem(productId);

    if(existingCartItem !== null){
        existingCartItem.quantity += 1;
    }else{
        const cartItem = {
            productId: productId,
            quantity: 1
        };
        cart.push(cartItem);
    }
    saveCart();

    console.log(cart);
}

function findCartItem(productId){
    for(const item of cart){
        if(item.productId === productId){
            return item;
        }
    }
    return null;    
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart(){
    const savedCart = localStorage.getItem("cart");

    if(savedCart !== null){
        cart = JSON.parse(savedCart);
    }
}
