
 const products = [
    {
        name : "Macbook M3",
        price : 2200,
        category : "Laptop",
        stock : 50,
        isInStock : true
    },
    {
        name: "Hyperx Keyboard",
        price: 200,
        category: "Accessories",
        stock: 100,
        isInStock: true
    },
    {
        name: "Hyperx Headset",
        price: 150,
        category: "Audio",
        stock: 99,
        isInStock: true
    },
    {
        name: "Samsung Odyssey",
        price: 350,
        category: "Monitors",
        stock: 35,
        isInStock: true
    },
    {
        name: "Gaming Chair",
        price: 400,
        category: "Furniture",  
        stock: 56,
        isInStock: true
    }
];

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
            <p>${product.category}</p>
            <p class="price">Price is ${product.price} USD</p>
            <button>view details</button>
        </div>` 

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

        const matchesSearch = productName.includes(searchText) ||
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
    if(selectedPrice === "over-500" && product.price > 500){
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


