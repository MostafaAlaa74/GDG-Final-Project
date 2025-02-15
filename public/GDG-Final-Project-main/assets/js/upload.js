document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById("preview").src = reader.result;
        };
        reader.readAsDataURL(file);

        // Call the upload function
        uploadImage(file);
    }
});

function uploadImage(file) {
    const token = localStorage.getItem("authToken"); // Get token from local storage

    if (!token) {
        console.error("No authentication token found!");
        return;
    }

    const formData = new FormData();
    formData.append("image", file);

    fetch("http://127.0.0.1:8000/api/upload", { 
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`, // Attach token here
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Upload successful:", data);
    })
    .catch(error => {
        console.error("Error uploading image:", error);
    });
}
