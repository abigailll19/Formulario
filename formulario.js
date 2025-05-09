
function agregarCliente() {
  // obtiene de campos de nombre, correo, teléfono y país
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const pais = document.getElementById("pais").value;

  // si alguno de los campos está vacío, muestra un mensaje y no sigue
  if (nombre === "" || correo === "" || telefono === "" || pais === "") {
    alert("por favor, completa todos los campos.");
    return;
  }

  // busca la tabla donde se agregan los clientes (en el cuerpo de la tabla)
  const tabla = document.getElementById("tablaClientes").getElementsByTagName("tbody")[0];
  // crea una nueva fila en la tabla
  const nuevaFila = tabla.insertRow();

  // agrega las celdas con los datos del cliente dentro de la nueva fila
  nuevaFila.innerHTML = `
    <td>${nombre}</td>
    <td>${correo}</td>
    <td>${telefono}</td>
    <td>${pais}</td>
  `;

  // limpia los campos del formulario 
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("pais").value = "";
}
