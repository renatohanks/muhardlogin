const signUpForm = document.getElementById("signUp-form") as HTMLElement;

signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = (document.getElementById("username") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    
    if (username === "" || password === "") throw new Error("input field empty");

    try {
        const response = await fetch("http://localhost:2001/account/signUp", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, email, password})
        });
        
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }
        console.log(data);

    } catch (error) {
        console.log(error);
    }
});
