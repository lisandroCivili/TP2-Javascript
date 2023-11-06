const frase  = prompt("Ingrese una frase: ");
const fraseMinuscula = frase.toLowerCase();
let cont = 0;
 for (let i = 0; i < fraseMinuscula.length; i++) {
    
     switch (fraseMinuscula[i]) {
         case "a":
             cont++
             break;
         case "e":
             cont++
             break;
         case "i":
             cont++
             break;
         case "o":
             cont++
             break;
         case "u":
             cont++
             break;
 }
}
document.write(`La frase tiene ${cont} vocales.`);