const loginForma = document.querySelector("#loginForm");
loginForma.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUsersRegistred = Users.find(
    (user) => user.email === email && user.password === password
  );

  if (!isUsersRegistred) {
    return alert("Usuario y/o contraseña incorrectos");
  }
  alert(`Usuario exitosamente logueado ${isUsersRegistred.name}`);
  localStorage.setItem("Login_success", JSON.stringify(isUsersRegistred));
  window.location.href = "./index.html";
});
