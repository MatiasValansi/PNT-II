/*
Parte 3: Métodos de validación
8. Verificar con . some( ) :
Usá . some( ) para comprobar si existe algún producto con un precio
mayor a $1 0. 000.
Mostrá el resultado ( true o false) .
9. Verificar con . every( ) :
Usá . every( ) para saber si todos los productos cuestan más de $1 000.
Mostrá el resultado.
1 0. Verificar existencia con . includes( ) :
Usando el array de nombres creado en el punto 4, comprobá si
contiene el nombre " Campera" .
*/

const productos = [
    { id: 1 , nombre: " Remera" , precio: 1500, categoria: " Ropa" },
    { id: 2, nombre: " Pantalón" , precio: 2500, categoria: " Ropa" },
    { id: 3, nombre: " Zapatillas" , precio: 8000, categoria: " Calzado" },
    { id: 4, nombre: " Gorra" , precio: 1200, categoria: " Accesorios" },
    { id: 5, nombre: " Campera" , precio: 9500, categoria: " Ropa" }
    ] ;

console.log(productos.some(cadaProducto => cadaProducto.precio > 10000));

console.log(productos.every(cadaProducto => cadaProducto.precio > 1000))

const nombresProductos = productos.map(cadaProducto => cadaProducto.nombre)
console.log(nombresProductos.includes(" Campera"))

