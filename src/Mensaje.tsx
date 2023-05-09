//PascalCasing
function Mensaje() {
    //JSX: JavaScript XML, es dinámico, como muestra la variable entre llaves
    //Esto se compila a JavaScript
    //babeljs.io muestra cómo
    const nombre = ``;
    //Dentro de {} puede ir cualquier codigo JS como una funcion o variable
    if(nombre)
        return <h1>Socioo {nombre}</h1>;
    return <h1>No hay socio</h1>
}

//Para poder ser usado en otros sitios
export default Mensaje;