const usuario = document.querySelector(".banner_container").value;
const registro = document.querySelector(".ui-menu-icon");

function checkUser() {
  usuario;
  /**
   * Describe this function...
   * @param {IClientAPI} context registro numero 15
   */
  usuario.addEventListener("click", function (e) {
    alert("los datos recibidos estan seguros");
    usuario.length(length - 1);

    if (usuario > 0) {
      registro.textContent = "add new event";
    } else {
      alert("reiniciar los datos");
    }
  });
}
