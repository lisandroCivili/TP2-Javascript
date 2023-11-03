const lineas = parseInt(prompt("Ingrese una cantidad de lineas:"));
const columnas = parseInt(prompt("Ingrese una cantidad de columnas:"));
let total = lineas*columnas;

document.write("<table>")

for (let index = 0; index < lineas; index++) {
    
    document.write("<tr>")
    
    for (let index = 0; index < columnas; index++) {
        
        document.write(`<td>${total--}</td>`)
        
    }
    document.write("</tr>")
}


document.write("</table>")
