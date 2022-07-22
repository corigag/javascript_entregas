//captura el contenedor principal declarado en el archivo HTML, para luego con un forof en una recorrer el array de productos 
//e ir creando las cards (que iran dentro el contenedor principal) para poder visualizarlos y agregarlos al carrito.

const contenedorMain = document.getElementById("contenedorMain");
contenedorMain.classList.add("flex-wrap")
contenedorMain.innerHTML = '';       
const cards= '';
const carrito = [];

function crear_productos(arrayProductos){
    
    for (const element of arrayProductos) {
       let cards = ( contenedorMain.innerHTML += `
        <div class="card col-3 text-center producto my-3" style="width: 18rem;">
            <img src=${element.imagen} class="card-img-top imagen" alt="imagen producto">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">${element.detalle}</p>
                <p class="card-text valor">$${element.valor}</p>
                <a href="#" class="btn btn-primary agregarCarrito">Añadir al carrito</a>
                </div>
                </div>
            `)
 
        }
    };
    
    crear_productos(productos)
    
//filtrar muestra de productos por retornables y no retornables

//cuando muestra los objetos filtrados , ya no funciona el evento click en añadir al carrito
    
const botonRetornable = document.getElementById("modalidadRetornable");
    botonRetornable.addEventListener('click' , mostrar_retornables);
    
function mostrar_retornables(){
       
    const productosRetornables = productos.filter(element => element.retornable === true);
    contenedorMain.innerHTML = '';
    crear_productos(productosRetornables)
    
}
    
const botonNoRetornable = document.getElementById("modalidadNoRetornable");
    
botonNoRetornable.addEventListener('click' , mostrar_noRetornables)
    
function mostrar_noRetornables(){
    
    const productosNoRetornables = productos.filter(element => element.retornable === false);
    contenedorMain.innerHTML = '';
    crear_productos(productosNoRetornables)

};

//boton de stock, si el stock es = 0  deshabilita el boton de añadir  y en su lugar se lee "sin stock "
//situacion : en proceso, aun no cumple la funcion que quisiera

/*function sinStock(botonesAgregarCarrito){

    productos.forEach(element => {
        if(element.stock === 0 ){

            botonesAgregarCarrito.innerText = 'Sin Stock'
            botonesAgregarCarrito.disabled = true
        }else{
            botonesAgregarCarrito.disabled = false
        }
        
    })
}; */

//agrega evento click a los botones Añadir Carrito

const botonesAgregarCarrito = document.querySelectorAll('.agregarCarrito');
botonesAgregarCarrito.forEach((botonAgregar) => {
    botonAgregar.addEventListener('click', agregar_carrito)
  });

  function agregar_carrito(e){

    let botonCompra = e.target
    let botonCompraPadre = botonCompra.parentNode
    let botonCompraAbuelo = botonCompra.parentNode
    
    
//traigo los elementos para poder mostrar el producto en el carrito y tambien agregarlo al array del Carrito 
     
    const nombreProducto = botonCompraPadre.querySelector("h5").textContent;
    const valorProducto = botonCompraPadre.querySelector(".valor").textContent;
    const imagenProducto = contenedorMain.querySelector("img").src;

//creo un objeto con los elementos del item seleccionado
    let item = {
        nombre: nombreProducto,
        valor: valorProducto,
        imagen: imagenProducto,
        cantidad:1 ,
    }

    carrito.push(item)

    mostrar_productos_carrito(item)
}

//funcion para mostrar los items en una seccion carrito de compra

function mostrar_productos_carrito(item){
    let divProductosCarrito = document.createElement("div")


    divProductosCarrito.innerHTML = `
      
       <div class="col-6 d-flex justify-content-around p-3">
            <img src=${item.imagen} alt="imagen producto" width="100px" height="100px">
            <p>${item.nombre}<p>
            <p>${item.valor}<p>
           <button class="borrar_elemento">Borrar</button>
       </div>
       

   `
   let contenidoCarrito = document.querySelector(".contenidoCarrito")
   contenidoCarrito.appendChild(divProductosCarrito) 
}

  