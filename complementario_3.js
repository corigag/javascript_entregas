//captura el contenedor principal declarado en el archivo HTML, para luego con un forof en una recorrer el array de productos 
//e ir creando las cards (que iran dentro el contenedor principal) para poder visualizarlos y agregarlos al carrito.

const contenedorMain = document.getElementById("contenedorMain");
contenedorMain.classList.add("flex-wrap")
contenedorMain.innerHTML = '';       
const cards= '';

function crearProductos(arrayProductos){

    for (const element of arrayProductos) {
       let cards = ( contenedorMain.innerHTML += `
        <div class="card col-3 text-center" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">${element.detalle}</p>
                <a href="#" class="btn btn-primary" id="addCarrito">Añadir al carrito</a>
            </div>
        </div>
            `)
 
    }
};

crearProductos(productos)

//filtra productos por retornable / no retornable y los muestra segun lo elegido 

const productosRetornables = productos.filter(element => element.retornable === true)
const productosNoRetornables = productos.filter(element => element.retornable === false)

function modalidad(productosFiltro){

   
   if(productosFiltro == productosNoRetornables){
        crearProductos(productosNoRetornables)   
    }
    else if(productosFiltro == productosRetornables){
        crearProductos(productosRetornables)
    }

};

//modalidad(productosRetornables)
//modalidad(productosNoRetornables)


//captura el boton "Añadir al carrito" , si el stock es = 0 lo deshabilita y en su lugar se lee "sin stock "

//Esta parte del codigo es la que no cumple la funcion que quisiera, cuando se ejecuta, muestra "sin stock" solo al primer elemento del array 
//de productos. y no deshabilita tampoco los botones.

let botonCarrito = document.getElementsByTagName("a");
console.log(botonCarrito)

function sinStock(arrayProductos){

    for (const element of arrayProductos) {

        if(element.stock == 0 ){

            botonCarrito.innerText = 'Sin Stock'
            botonCarrito.disabled = true
        }
        else if( element.stock != 0 ){

            botonCarrito.disabled = false
        }
        
    }

};

sinStock(productos)

