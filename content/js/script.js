
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
        category: "Keyboard",
        stock: 100,
        isInStock: true
    },
    {
        name: "Hyperx Headset",
        price: 150,
        category: "Headset",
        stock: 99,
        isInStock: true
    },
    {
        name: "Samsung Odyssey",
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

const productGrid = document.getElementById("productGrid");
 
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

 function showProducts(){
    renderProducts(products);  
}

const searchInput = document.getElementById("searchInput");

function searchProducts(searchText) {
    const filteredProducts = [];

    for (const product of products) {

        const productName = product.name.toLowerCase();
        const ProductCategory = product.category.toLowerCase();
        const search = searchText.toLowerCase();

        if (productName.includes(search) || ProductCategory.includes(search)) {
            filteredProducts.push(product);
        }
    }
    return filteredProducts;
}

searchInput.addEventListener("input", function(){
    const searchText = searchInput.value;

    const filteredProducts = searchProducts(searchText);

    renderProducts(filteredProducts);
});

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 2500,
    stock: 5
  },
  {
    id: 2,
    name: "Mouse",
    price: 50,
    stock: 20
  },
  {
    id: 3,
    name: "Keyboard",
    price: 150,
    stock: 0
  },
  {
    id: 4,
    name: "Monitor",
    price: 1200,
    stock: 3
  },
  {
    id: 5,
    name: "Headphones",
    price: 300,
    stock: 0
  }
];


//  0 ze meti stockis produktebis mosadzebni
function getAvailableProducts(products) {
    const availableProducts = products.filter(product => product.stock > 0);

    console.log(availableProducts);
}

getAvailableProducts(products);


//  1000ze meti produkti rom vipoviot 

function getExpensiveProducts(products) {
    const expensiveProducts = products.filter(product => product.price > 1000);

    console.log(expensiveProducts);
}

getExpensiveProducts(products);



