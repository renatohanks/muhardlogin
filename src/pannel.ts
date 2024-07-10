const storageData = localStorage.getItem("userData");
const userData = storageData ? JSON.parse(storageData).data : undefined;

if (!userData) {
    window.location.replace("signIn");
    throw new Error("not connected");
}

(document.getElementById("header-username") as HTMLElement).innerText = userData.user_data.username;
(document.getElementById("header-usercash") as HTMLElement).innerText = "$ " + userData.user_data.cash;

(document.getElementById("logout-btn") as HTMLElement).addEventListener("click", () => {
    localStorage.removeItem("userData");
    window.location.replace("signIn");
});

export default {};
