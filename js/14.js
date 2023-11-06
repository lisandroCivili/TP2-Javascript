const frase = prompt("Ingrese una frase: ");  
let fraseNueva = " ";  
const espacio = " "
const guion = "-";

for (let i = 0; i < frase.length; i++) {
    
    if (frase[i] === espacio) {
        fraseNueva += guion
    }else{
        fraseNueva += frase[i];
    }
    
}
document.write(fraseNueva)


