const apiUrl = "http://127.0.0.1:8000/api/product"; // Your Laravel API URL
const productId = 1; // Change this to the desired product ID

fetch(apiUrl + productId)
    .then(response => {
        if (!response.ok) {
            throw new Error("Product not found");
        }
        return response.json();
    })
    .then(product => {
        console.log("Product Data:", product);
        // Example: Display data on the page
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-description").innerText = product.description;
        document.getElementById("product-price").innerText = "Price: $" + product.price;
    })
    .catch(error => console.error("Error fetching product:", error));