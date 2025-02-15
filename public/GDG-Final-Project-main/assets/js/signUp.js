document.querySelector("form").addEventListener("submit" , async function (event) {
    event.preventDefault();

    const fName = document.querySelector(".reg-first-name").value; 
    const lName = document.querySelector(".reg-last-name").value; 
    const email = document.querySelector(".reg-email").value; 
    const gender = document.querySelector(".reg-gender").value; 
    const password = document.querySelector(".reg-password").value; 
    const password_confirmation = document.querySelector(".reg-password-confirmation").value; 
    const token = localStorage.getItem('authToken');

    if(password !== password_confirmation) {
        alert("Passwords do not match!");
        return;
    }

    console.log("Sending Data:" , {fName, lName, email , gender});

    try{
        const response = await fetch("http://127.0.0.1:8000/api/register",{
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                    "Accept":"application/json" ,
                    'Authorization': `Bearer ${token}`
                },
            body: JSON.stringify({fName , lName , email , gender , password , password_confirmation})    
        });

        const data = await response.json();

        if(response.ok) {
            console.log("Registration Successful:", data);
            alert("Registration Successful: " + data.message)
            window.location.href = "index.html";
        } else{
            console.log("Registration Failed:" , data);
            alert("Registration Failed: " + data.message)
        }
    } catch (error) {
        console.error("Network Error:", error)
        alert("Network Error: Could not connect to the server.");
    }
});



