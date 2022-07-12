//Array de productos disponibles 

let productos = [
    {
        id:1,
        nombre: 'Shampoo',
        valor: 900,
        detalle: 'shampoo solido de 100g',
        stock: 80
    }, 
    {
        id:2,
        nombre: 'Acondicionador',
        valor: 900,
        detalle: 'acondicionador solido de 75g',
        stock: 60
    },
    {
        id:3,
        nombre: 'Crema diruna',
        valor: 1400,
        detalle: 'crema de calendula y manzanilla, envase retornable',
        stock: 25
    },
    {
        id:4,
        nombre: 'Crema medicinal',
        valor: 1500,
        detalle: 'crema de cannabis y jarilla, envase retornable',
        stock: 19
    }
]

console.log(productos);

//Carga de nuevos productos

function IngresoProducto (id, nombre, valor, detalle, stock){

    this.id = prompt ( "ingrese el id del nuevo producto");
    this.nombre = prompt ( "ingrese el nombre del nuevo producto");
    this.valor = prompt ( "ingrese el valor del nuevo producto");
    this.detalle = prompt ( "ingrese el detalle del nuevo producto");
    this.stock = prompt ( "ingrese el stock del nuevo producto");

}

let inicio = ""

do{
    let inicio = prompt ("Ingrese 1 para agregar productos o FIN para finalizar");
    if( inicio == "fin" || inicio == "Fin" || inicio == "FIN"){
       break;
    }
    else{
        productos.push( new IngresoProducto());
    }
    
}
while ( inicio != "fin" || inicio != "Fin" || inicio != "FIN")

console.log(productos);

// Chequeo de stock de cada producto

for (const element of productos) {

console.log ("En stock: " + element.stock + " unidades de " + element.nombre)
    
}



//Eliminar un producto, primero busca el producto que quiero eliminar, y si lo encuentra lo elimina.
/*
function eliminar (element){

    let index = productos.indexOf(element.nombre);

    if ( index != -1) {

        productos.splice(index , 1 )
    }
}

eliminar('Shampoo');

 */








