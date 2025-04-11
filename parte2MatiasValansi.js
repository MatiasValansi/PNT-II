/*
Parte 2: Métodos de transformación y
filtrado
4. Obtener solo los nombres con . map( ) :
Creá un nuevo array que contenga únicamente los nombres de los
productos.
Mostralo en consola.
Resultado esperado: [ " Remera" , " Pantalón" , " Zapatillas" , " Gorra" ,
" Campera" ]
5. Filtrar por categoría con . filter( ) :
Creá un nuevo array que contenga solo los productos cuya categoría
sea " Ropa" .
Mostrar en consola.
6. Filtrar por precio con . filter( ) :
Creá un array que contenga todos los productos cuyo precio sea mayor
a $3000.
7. Buscar un producto específico con . find( ) :
Usá el método . find( ) para encontrar el obj eto que tenga como nombre
" Gorra" .
Mostralo completo en consola.
*/

const productos = [
    { id: 1 , nombre: " Remera" , precio: 1500, categoria: " Ropa" },
    { id: 2, nombre: " Pantalón" , precio: 2500, categoria: " Ropa" },
    { id: 3, nombre: " Zapatillas" , precio: 8000, categoria: " Calzado" },
    { id: 4, nombre: " Gorra" , precio: 1200, categoria: " Accesorios" },
    { id: 5, nombre: " Campera" , precio: 9500, categoria: " Ropa" }
    ] ;

const nombresProductos = productos.map(cadaProducto => cadaProducto.nombre)
console.log(nombresProductos)

const ropaProductos = productos.filter(cadaProducto => cadaProducto.categoria == " Ropa")
console.log(ropaProductos);

const precioProductos = productos.filter(cadaProducto => cadaProducto.precio > 3000)
console.log(precioProductos);

const gorra = productos.find(cadaProducto => cadaProducto.nombre == " Gorra")
console.log(gorra)

