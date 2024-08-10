
function calcularTotalCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

const renderCar = async () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenidoHTML;

    if (totalProductos() > 0) {
        const totalCarrito = calcularTotalCarrito();
        contenidoHTML = `<table class="table">
        <tbody>
        <tr>
            <td class="text-end" colspan="4"><button class="btn btn-danger btn-sm" onclick="vaciarCarro();">Vaciar Carrito <i class="bi bi-trash"></i></button></td>
            </tr>`;

        for (const element of carrito){
            contenidoHTML += `<tr text-center>
            <td><img src="${element.imagen}" alt="${element.descripcion}" width="140"></td>
            <td class="align-middle">${element.nombre}</td>
            <td class="align-middle"><span class="text-danger">$${element.precio}</span></td>
           <td class="text-end align-middle"><button class="btn btn-danger btn-sm" onclick="eliminarProducto(${element.id});">Eliminar <i class="bi bi-trash"></i></button></td>
                </tr>`;
        }

        contenidoHTML += 
        `</tbody>
        <tr>
            <td class="text-end" colspan="4">
                <span class="me-3">Total: <strong>$${totalCarrito.toFixed(2)}</strong></span>
                <button class="btn btn-success btn-sm" onclick="comprarCarrito();">Comprar <i class="bi bi-bag"></i></button>
            </td>
        </tr>
            </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-dark my-5 text-center" role="alert">
        <h2>❌</h2>
        <h3>No se encontraron Productos en el Carrito!</h3>
        </div>`;
    }

    document.getElementById("contenido2").innerHTML = contenidoHTML;
}

renderCar()
renderBtnCarro()

function comprarCarrito() {
    const totalCarrito = calcularTotalCarrito();
    document.getElementById("totalPagar").value = `$${totalCarrito.toFixed(2)}`;
    const modalCompra = new bootstrap.Modal(document.getElementById("modalCompra"));
    modalCompra.show();

    document.getElementById("formCompra").addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const direccion = document.getElementById("direccion").value;
        const telefono = document.getElementById("telefono").value;

        const compraCliente = {
            nombre,
            apellido,
            direccion,
            telefono,
            total: totalCarrito
        };

        let compras = JSON.parse(localStorage.getItem("compracliente")) || [];
        compras.push(compraCliente);
        localStorage.setItem("compracliente", JSON.stringify(compras));

       
        vaciarCarro();
        modalCompra.hide();
    
        Swal.fire({
            icon: 'success',
            title: 'Gracias por su compra',
            text: 'Su pedido le llegará dentro de poco',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            
            window.location.href = 'index.html';
        });


    });
}
