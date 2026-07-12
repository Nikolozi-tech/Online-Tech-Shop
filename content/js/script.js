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



function renderProducts(productList){

    const productGridId = document.getElementById("productGrid");

    let productCardHtml = "";

    if(productList.length === 0){
        productGridId.innerHTML = "<p>No products found</p>";
        return;
    }

    for (const product of productList) {

        productCardHtml += `
        <div class="product-card">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <p>${product.category}</p>

            <p class="price">Price is ${product.price} USD</p>

            <button>View Details</button>

        </div>
        `;
    }

    productGrid.innerHTML = productCardHtml;
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



searchInput.addEventListener("input", applyFilters);

categoryFilter.addEventListener("change", applyFilters);

priceFilter.addEventListener("change", applyFilters);



clearSearchBtn.addEventListener("click", () => {

    searchInput.value = "";

    categoryFilter.value = "All";

    priceFilter.value = "All";

    renderProducts(products);

});