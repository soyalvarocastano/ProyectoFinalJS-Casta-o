const renderProductos = async () => {
    const response = await fetch("json/productos.json");
    const data = await response.json();
    localStorage.setItem("productos", JSON.stringify(data)); // Guardar los productos en el localStorage
    let contenidoHTML = "";

    data.forEach(element => {
        contenidoHTML += `<div class="col-md-3">
        <div class="card border-0 mb-3">
       <a href="./product.html" onclick ="observarProducto(${element.id});"> 
       <img src="${element.imagen}" class="card-img-top" alt="${element.descripcion}">
       </a>
        <div class="card-body text-center">
            <h6 class="card-title">${element.nombre}</h6>
            <p class="card-text">${element.descripcion}<br><span class="text-danger">$${element.precio}</span></p>
            <p class ="card.text"><button class="btn btn-dark rounded-pill" onclick="agregarProducto(${element.id})">Agregar (+)</button></p>
        </div>
        </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
    renderBtnCarro()
}

renderProductos();

document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const contactoCliente = {
        nombre,
        apellido,
        telefono,
        email,
        mensaje
    };

    // Guardar en localStorage
    const contactos = JSON.parse(localStorage.getItem("contactocliente")) || [];
    contactos.push(contactoCliente);
    localStorage.setItem("contactocliente", JSON.stringify(contactos));

    // SweetAlert
    Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Nos pondremos en contacto muy pronto',
        showConfirmButton: false,
        timer: 2000
    });

    // Limpiar el formulario
    document.getElementById("contactoForm").reset();
});








