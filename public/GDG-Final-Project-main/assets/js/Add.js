// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".AddGategory form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const categoryName = document.getElementById("addn").value;
        const categoryDescription = document.getElementById("addc").value;

        // Prepare the data to send
        const data = {
            name: categoryName,
            description: categoryDescription,
        };

        // Send the POST request to the API
        fetch("http://127.0.0.1:8000/api/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept" :"application/json" // Set the content type to JSON
            },
            body: JSON.stringify(data), // Convert the data to JSON format
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // Parse the JSON response
            })
            .then((result) => {
                console.log("Success:", result);
                alert("Category created successfully!"); // Notify the user
                form.reset(); // Clear the form
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to create category. Please try again."); // Notify the user of the error
            });
    });
});