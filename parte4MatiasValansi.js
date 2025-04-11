/**
 Parte 4:
1 1 . Ordenar con . sort( ) :
Ordená los productos por precio de menor a mayor.
Mostrá el nuevo array ordenado.
1 2. Generar mensaj es personalizados con . map( ) :
Usá . map( ) para crear un array de strings como este:
" El producto Remera cuesta $1 500 y pertenece a la categoría Ropa. "
Mostrá el resultado en consola.
1 3. Agregar productos con spread:
Crear un nuevo array de obj etos con más productos.
Utilizar el operador spread para combinar ambos arrays de productos
en un nuevo array.
Mostrar el array resultante en la consola.
 */

const productos = [
    { id: 1 , nombre: " Remera" , precio: 1500, categoria: " Ropa" },
    { id: 2, nombre: " Pantalón" , precio: 2500, categoria: " Ropa" },
    { id: 3, nombre: " Zapatillas" , precio: 8000, categoria: " Calzado" },
    { id: 4, nombre: " Gorra" , precio: 1200, categoria: " Accesorios" },
    { id: 5, nombre: " Campera" , precio: 9500, categoria: " Ropa" }
    ] ;

const productosPorPrecio = productos.sort((cadaProductoA, cadaProductoB) => cadaProductoA.precio - cadaProductoB.precio)
console.log(productosPorPrecio)

console.log(productos.map(cadaProducto => `El producto ${cadaProducto.categoria} cuesta $${cadaProducto.precio} y pertenece a la categoría ${cadaProducto.categoria}`))

const nuevosProductos = [
    { id: 6 , nombre: "Computadora" , precio: 15800, categoria: "Electrónica" },
    { id: 2, nombre: "Pelota" , precio: 30, categoria: "Deportes" },
    { id: 3, nombre: "Perfume" , precio: 50, categoria: "Accesorios" }
]

const mezclaProductos = [productos, nuevosProductos]
console.log(mezclaProductos);
