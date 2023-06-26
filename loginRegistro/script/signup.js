const signupForm = document.querySelector("#singUpForm");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUsersRegistred = Users.find((user) => user.email === email);

  if (isUsersRegistred) {
    return alert("Usuario ya registrado");
  }

  Users.push({
    name: name,
    email: email,
    password: password,
  });
  localStorage.setItem("users", JSON.stringify(Users));
  alert("Usuario exitosamente registrado");
  // redireccionar a login

  window.location.href = "./login.html";
});
