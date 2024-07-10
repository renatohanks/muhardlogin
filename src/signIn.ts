const form = document.getElementById("login-form") as HTMLElement;

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    
    if (username === "" || password === "") throw new Error("input field empty");

    try {
        const response = await fetch("http://localhost:2001/account/signIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({username, password})
        });

        const data = await response.json();
        if (!response.ok) return console.log(`_ERROR_ > ${data.message}` )
        localStorage.setItem("userData", JSON.stringify(data));
        window.location.replace("pannel");
    } catch (error) {
        console.log("Server connection error > ")
        throw new Error(error);
    }
});
