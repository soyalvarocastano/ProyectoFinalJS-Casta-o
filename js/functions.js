
function agregarProducto(id){
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const producto = productos.find(item => item.id === id);
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderBtnCarro();

    Swal.fire({
        icon: 'success',
        title: 'Producto agregado correctamente',
        showConfirmButton: false,
        timer: 1500
    });
    console.log("El producto"+  id  +"se agregó correctamente");
}

function eliminarProducto(id){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carroActualizado = carrito.filter(element => element.id != id);
    localStorage.setItem("carrito", JSON.stringify(carroActualizado));
    renderCar();
    renderBtnCarro();
    console.log("El producto" + id + "se elimino correctamente");
}


function totalProductos() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    return carrito.length;
}

function vaciarCarro(){
    localStorage.removeItem("carrito")
    renderCar()
    renderBtnCarro();
    console.log("El carrito se vacio correctamente");

}

function renderBtnCarro(){
    let total = totalProductos()
    document.getElementById("totalCarrito").innerHTML = total;
}

function cargarProductoLS() {
    const producto = JSON.parse(localStorage.getItem("productoSeleccionado")) || null;
    if (producto) {
        return producto;
    } else {
        console.error("No se encontró el producto en el localStorage.");
        return null;
    }
}

function observarProducto(id) {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const productoSeleccionado = productos.find(item => item.id === id);
    localStorage.setItem("productoSeleccionado", JSON.stringify(productoSeleccionado));
}



