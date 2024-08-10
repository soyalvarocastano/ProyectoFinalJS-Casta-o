function renderProduct() {
    const producto = cargarProductoLS();
    if (!producto) return;

    let htmlImagenProducto = `<img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}" />`;
    let htmlDetalleProducto = `
        <h1>${producto.nombre}</h1>
        <p class="text-danger fs-3">$${producto.precio}</p>
        <p>${producto.descripcion}</p>
        <p class="card-text">
            <button class="btn btn-dark rounded-pill" onclick="agregarProducto(${producto.id});">Agregar (+)</button>
        </p>`;
    
    document.getElementById("imagenProducto").innerHTML = htmlImagenProducto;
    document.getElementById("detalleProducto").innerHTML = htmlDetalleProducto;
}

renderProduct();
renderBtnCarro()