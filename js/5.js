let dni;
let valorLetras;
let resultado;
let confirmacion
const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

do {
    dni = parseInt(prompt("Ingrese un D.N.I:"));
    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        alert("Ingrese un DNI valido")
    }else{
        valorLetras = dni%23;
        for (let i = 0; i < valorLetras; i++) {
            
            resultado = letras[valorLetras];
        }
        alert(`La letra del DNI ingreasado es ${resultado}`);
    }
    confirmacion = confirm("Desea ingresar otro DNI?")
    
} while (confirmacion !== false);


