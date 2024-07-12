const BASEURL ='http://127.0.0.1:5000/';

// const BASEURL='https://com24187.pythonanywhere.com/'


/**
 * Función para realizar una petición fetch con JSON.
 * @param {string} url - La URL a la que se realizará la petición.
 * @param {string} method - El método HTTP a usar (GET, POST, PUT, DELETE, etc.).
 * @param {Object} [data=null] - Los datos a enviar en el cuerpo de la petición.
 * @returns {Promise<Object>} - Una promesa que resuelve con la respuesta en formato JSON.
 */
async function fetchData(url, method, data = null) {
  const options = {
      method: method,
      headers: {
          'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
  };
  try {
    const response = await fetch(url, options);  // Realiza la petición fetch
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();  // Devuelve la respuesta en formato JSON
  } catch (error) {
    console.error('Fetch error:', error);
    alert('An error occurred while fetching data. Please try again.');
  }
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    var radioButtons = document.querySelectorAll('input[name="trabajoGastronomia"]');
    radioButtons.forEach(function (radio) {
        radio.checked = false;
    });
    document.getElementById('experienciaGastronomia').value = '';
    experienciaGastronomiaContainer.style.display = 'none';
    document.getElementById('cv').value = '';
    alert("¡Información enviada!");
}

/**
 * Función para comunicarse con el servidor para poder Crear o Actualizar
 * un registro de pelicula
 * @returns 
 */
async function saveRegistro(){
  const idRegistro = document.querySelector('#id-registro').value;
  const nombre = document.querySelector('#nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const correo = document.querySelector('#correo').value;
  const exp = document.querySelector('#trabajoGastronomiaSi').value;
  const expno = document.querySelector('#trabajoGastronomiaNo').value;
  const curriculum = document.querySelector('#curriculum').value;


  //VALIDACION DE FORMULARIO
  if (!nombre || !apellido || !correo ) {
    Swal.fire({
        title: 'Error!',
        text: 'Por favor completa todos los campos.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    });
    return;
  }
  // Crea un objeto con los datos de la película
  const registroData = {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      exp: exp,
      exp: expno,
      curriculum: curriculum
  };

    
  let result = null;
  // Si hay un idRegistro, realiza una petición PUT para actualizar la película existente
  if(idRegistro!==""){
    result = await fetchData(`${BASEURL}/api/registros/${idRegistro}`, 'PUT', registroData);
  }else{
    // Si no hay idMovie, realiza una petición POST para crear una nueva película
    result = await fetchData(`${BASEURL}/api/registros/`, 'POST', registroData);
  }
  
  const formRegistro = document.querySelector('#form-registro');
  formRegistro.reset();
  Swal.fire({
    title: 'Exito!',
    text: result.message,
    icon: 'success',
    confirmButtonText: 'Cerrar'
  })
  showRegistros();
    limpiarFormulario();
}


/**
 * Funcion que permite crear un elemento <tr> para la tabla de peliculas
 * por medio del uso de template string de JS.
 */
async function showRegistros(){
    let registros = await fetchData(BASEURL +'/api/registros/', 'GET');
    const tableRegistros = document.querySelector('#list-table-registros tbody');
    tableRegistros.innerHTML='';
    registros.forEach((registro) => {
    let tr = `<tr>
                  <td>${registro.nombre}</td>
                  <td>${registro.apellido}</td>
                  <td>${registro.correo}</td>
                  <td>
                      <button class="btn-cac" onclick='updateRegistro(${registro.id_registro})'><i class="fa fa-pencil" ></button></i>
                      <button class="btn-cac" onclick='deleteRegistro(${registro.id_registro})'><i class="fa fa-trash" ></button></i>
                  </td>
                </tr>`;
        tableRegistros.insertAdjacentHTML("beforeend",tr);
  });
}
  
/**
 * Function que permite eliminar una pelicula del array del localstorage
 * de acuedo al indice del mismo
 * @param {number} id posición del array que se va a eliminar
 */
function deleteRegistro(id){
  Swal.fire({
      title: "Esta seguro de eliminar el registro?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
  }).then(async (result) => {
      if (result.isConfirmed) {
          let response = await fetchData(`${BASEURL}/api/registros/${id}`, 'DELETE');
        showRegistros();
        Swal.fire(response.message, "", "success");
      }
  });
  
}


/**
 * Function que permite cargar el formulario con los datos de la pelicula 
 * para su edición
 * @param {number} id Id de la pelicula que se quiere editar
 */
async function updateRegistro(id){
  //Buscamos en el servidor la pelicula de acuerdo al id
    let response = await fetchData(`${BASEURL}/api/registros/${id}`, 'GET');
  const idRegistro = document.querySelector('#id-registro');
  const nombre = document.querySelector('#nombre');
  const apellido = document.querySelector('#apellido');
  const correo = document.querySelector('#correo');
  const exp = document.querySelector('#exp');
  const curriculum = document.querySelector('#curriculum');
  
  idRegistro.value = response.id_registro;
  nombre.value = response.nombre;
  apellido.value = response.apellido;
  correo.value = response.correo;
  curriculum.value = response.curriculum;
}
  
// Escuchar el evento 'DOMContentLoaded' que se dispara cuando el 
// contenido del DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded',function(){
  const btnSaveRegistro = document.querySelector('#btn-save-registro');
  //ASOCIAR UNA FUNCION AL EVENTO CLICK DEL BOTON
  btnSaveRegistro.addEventListener('click',saveRegistro);
    showRegistros();
});