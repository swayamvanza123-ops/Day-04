

const products = [

    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 50000,
        stock: 20
    },

    {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        price: 25000,
        stock: 15
    },

    {
        id: 3,
        name: "Headphones",
        category: "Accessories",
        price: 2000,
        stock: 8
    },

    {
        id: 4,
        name: "Keyboard",
        category: "Accessories",
        price: 1500,
        stock: 25
    },

    {
        id: 5,
        name: "Office Chair",
        category: "Furniture",
        price: 7000,
        stock: 5
    },

    {
        id: 6,
        name: "Monitor",
        category: "Electronics",
        price: 12000,
        stock: 12
    },

    {
        id: 7,
        name: "Mouse",
        category: "Accessories",
        price: 800,
        stock: 30
    },

    {
        id: 8,
        name: "Office Table",
        category: "Furniture",
        price: 10000,
        stock: 7
    }

];


// ========================================
// FUNCTIONS
// ========================================

function getTotalProducts() {

    return products.length;

}


function getTotalStock() {

    let total = 0;

    for (let product of products) {

        total += product.stock;

    }

    return total;

}


function getLowStockProducts() {

    return products.filter(function(product) {

        return product.stock < 10;

    });

}


function getTotalInventoryValue() {

    let total = 0;

    for (let product of products) {

        total += product.price * product.stock;

    }

    return total;

}


function getProductStatus(stock) {

    if (stock < 10) {

        return "Low Stock";

    } else {

        return "Available";

    }

}


// ========================================
// DISPLAY PRODUCTS
// ========================================

function displayProducts(productList) {

    const tableBody =
        document.getElementById("productTableBody");

    tableBody.innerHTML = "";


    for (let product of productList) {

        const status =
            getProductStatus(product.stock);


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                ${product.id}
            </td>

            <td>

                <a
                    href="product.html?id=${product.id}"
                    class="product-link"
                >
                    ${product.name}
                </a>

            </td>

            <td>
                ${product.category}
            </td>

            <td>
                ₹${product.price.toLocaleString("en-IN")}
            </td>

            <td>
                ${product.stock}
            </td>

            <td>

                <span class="status ${
                    status === "Low Stock"
                    ? "low-stock"
                    : "available"
                }">

                    ${status}

                </span>

            </td>

        `;


        tableBody.appendChild(row);

    }

}


// ========================================
// DASHBOARD
// ========================================

function updateDashboard() {

    document.getElementById("totalProducts")
        .textContent = getTotalProducts();


    document.getElementById("totalStock")
        .textContent = getTotalStock();


    document.getElementById("lowStock")
        .textContent =
        getLowStockProducts().length;


    document.getElementById("inventoryValue")
        .textContent =
        "₹" +
        getTotalInventoryValue()
            .toLocaleString("en-IN");

}


// ========================================
// CATEGORY FILTER
// ========================================

const categoryFilter =
    document.getElementById("categoryFilter");


categoryFilter.addEventListener(
    "change",
    function() {

        const selectedCategory =
            categoryFilter.value;


        if (selectedCategory === "All") {

            displayProducts(products);

        } else {

            const filteredProducts =
                products.filter(function(product) {

                    return product.category ===
                        selectedCategory;

                });


            displayProducts(filteredProducts);

        }

    }
);


// ========================================
// INITIAL LOAD
// ========================================

displayProducts(products);

updateDashboard();