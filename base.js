const productos = [
    {
        id:1,
        nombre: 'Shampoo',
        valor: 900,
        detalle: 'shampoo solido de 100g',
        stock: 80,
        categoria: 'higiene'
    }, 
    {
        id:2,
        nombre: 'Acondicionador',
        valor: 900,
        detalle: 'acondicionador solido de 75g',
        stock: 60,
        categoria: 'higiene'
    },
    {
        id:3,
        nombre: 'Crema de día',
        valor: 1400,
        detalle: 'crema de calendula y manzanilla, envase retornable',
        stock: 25,
        categoria: 'cuidado de la piel'
    },
    {
        id:4,
        nombre: 'Crema de noche',
        valor: 1400,
        detalle: 'crema de lavanda y flor de hibisco, envase retornable',
        stock: 25,
        categoria: 'cuidado de la piel'
    },
    {
        id:5,
        nombre: 'Crema medicinal',
        valor: 1500,
        detalle: 'crema de cannabis y jarilla, envase retornable',
        stock: 19,
        categoria: 'cuidado de la piel'
    },
    {
        id:6,
        nombre: 'Repelente',
        valor: 1700,
        detalle: 'Repelente natural para mosquitos',
        stock: 8,
        categoria:'higiene'
    },
    {
        id:7,
        nombre: 'Balsamo labial',
        valor: 500,
        detalle: 'Balsamo labial de manteca de cacao, envase retornable',
        stock: 15,
        categoria:'cuidado de la piel'
    }
]


//Carga de nuevos productos
/*
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

*/