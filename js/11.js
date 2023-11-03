const nombresArray = [];
const edadEntero = [];
let mayorEdad = ``;

for (let i = 1; i < 4; i++) {
   
    const nombre = prompt("Ingrese un nombre: ");
    const edad = parseInt(prompt("Ingrese una edad: "));

    edadEntero[i] = edad;
    nombresArray[i] = nombre
}

mayorEdad =  Math.max(edadEntero[1], edadEntero[2], edadEntero[3]);

switch (mayorEdad) {
    case edadEntero[1]:

        document.write(`${nombresArray[1]} es mayor con ${edadEntero[1]} años`);
        
        break;
    case edadEntero[2]:

        document.write(`${nombresArray[2]} es mayor con ${edadEntero[3]} años`);

        break;
    case edadEntero[3]:

        document.write(`${nombresArray[3]} es mayor con ${edadEntero[3]} años`);

        break;
}
