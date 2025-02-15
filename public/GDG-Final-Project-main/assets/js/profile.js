
const token = localStorage.getItem("authToken");

if (!token) {
    console.error("المستخدم غير مسجل الدخول");
} else {
    fetchUserData(token);
}


async function fetchUserData(token) {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept" : "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("فشل في جلب بيانات المستخدم");
        }

        const userData = await response.json();

        if (userData) {
            document.getElementById("userName").textContent = userData.name;
            document.getElementById("userEmail").textContent = userData.email;
            // document.getElementById("userEmail").ariaPlaceholder = userData.email;
            document.getElementById("myInput").setAttribute("placeholder", userData.email);
            document.getElementById("Name").setAttribute("placeholder", userData.name);
            document.getElementById("gender").setAttribute("placeholder", userData.gender);
            // document.getElementById("myInput").setAttribute("placeholder", userData.email);
        }
    } catch (error) {
        console.error("خطأ في جلب بيانات المستخدم:", error);
    }
}
