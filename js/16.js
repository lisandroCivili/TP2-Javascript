const frase = prompt("Ingrese una frase: ");
let fraseInversa = "";
 for (let i = frase.length -1 ; i > -1; i--) {
    
    fraseInversa += frase[i];
    
 }
 document.write(fraseInversa); 