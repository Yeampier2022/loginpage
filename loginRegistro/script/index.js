const user = JSON.parse(localStorage.getItem("Login_success")) || false;
if (!user) {
  window.location.href = "./login.html";
}

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("Login_success");
  window.location.href = "./login.html";
});
