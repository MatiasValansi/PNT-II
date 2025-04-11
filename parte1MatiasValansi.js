/*
1 . Acceder a propiedades individuales:
Mostrá en la consola el nombre del primer producto de la lista.

2. Recorrido con for. . . of:
Usá un bucle for. . . of para mostrar en consola el nombre y el precio
de cada producto.
Formato sugerido: " Producto: Remera - Precio: $1 500"

3. Recorrido con . forEach( ) :
Repetí el ej ercicio anterior, pero usando el método . forEach( ) en
lugar del bucle tradicional.
*/

const productos = [
    { id: 1 , nombre: " Remera" , precio: 1500, categoria: " Ropa" },
    { id: 2, nombre: " Pantalón" , precio: 2500, categoria: " Ropa" },
    { id: 3, nombre: " Zapatillas" , precio: 8000, categoria: " Calzado" },
    { id: 4, nombre: " Gorra" , precio: 1200, categoria: " Accesorios" },
    { id: 5, nombre: " Campera" , precio: 9500, categoria: " Ropa" }
    ] ;

console.log(productos[0].nombre);

for(cadaProduto = 0; cadaProduto < productos.length; cadaProduto++){
    console.log("Producto: "+ productos[cadaProduto].nombre + " - Precio: $" + productos[cadaProduto].precio);    
}

productos.forEach(cadaProduto => {
    console.log("Producto: "+ cadaProduto.nombre + " - Precio: $" + cadaProduto.precio);
});