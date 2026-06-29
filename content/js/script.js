
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

const productGrid = document.getElementById("productGrid");
 
function renderProducts(productList){

    let productCardHtml = "";

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