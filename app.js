// saveLocalStorage();

function obtenerLocalStorage() {
  if (localStorage.getItem("nombre")) {
    // SE QUE EXISTE EL NOMBRE EN EL LOCALSTORAGE
    let nombre = localStorage.getItem("nombre");
    console.log(nombre);

    let persona = JSON.parse(localStorage.getItem("persona"));
    console.log(persona);
  } else {
    console.log("No hay entrada en el local storage");
  }
}

obtenerLocalStorage();

function saveLocalStorage() {
  let persona = {
    name: "Yeampier",
    Edar: 22,
    Correo: "Yeampierjesua@gmail.com",
    coards: {
      lat: 10,
      ang: -10,
    },
  };
  let nombre = "Jesus";
  localStorage.setItem("nombre", nombre);

  localStorage.setItem("persona", JSON.stringify(persona));
}
