const frase = prompt("Ingrese una frase: ");
const fraseMinuscula = frase.toLowerCase();
let i = 0;
let posicion = 0;


  do {
      
      if (fraseMinuscula[i] === "a") {
          document.write(`La vocal a está en la posicion uno.`) 
            posicion =1;
      }else if (fraseMinuscula[i] === "e") {
          document.write(`La vocal e está en la posicion uno.`)
          posicion =1;
      }else if(fraseMinuscula[i] === "i"){
          document.write(`La vocal i está en la posicion uno.`)
          posicion =1;
      }else if(fraseMinuscula[i] === "o"){
          document.write(`La vocal o está en la posicion uno.`)
          posicion =1;
      }else if(fraseMinuscula[i] === "u"){
          document.write(`La vocal u está en la posicion uno.`)
          posicion =1;
      }
    
    i++
      

  } while (posicion < 1);
        
        

 





// do {
//     switch ((fraseMinuscula.indexOf(fraseMinuscula[cont]))) {
//         case "a":
//             posicion = cont;
//             break;
//         case "e":
//             posicion = cont;
//             break;
//         case "i":
//             posicion = cont;
//             break;
//         case "o":
//             posicion = cont;
//             break;
//         case "u":
//             posicion = cont;
//             break;
//     }
//     cont++
// } while (posicion !== cont);


// if (fraseMinuscula[i] === "a") {
//     posicion = i;
// }else if (fraseMinuscula[i] === "e") {
//     posicion = i;
// }else if (fraseMinuscula[i] === "i"){
//     posicion = i;
// }else if (fraseMinuscula[i] === "o"){
//     posicion = i;
// }else if (fraseMinuscula[i] === "u"){
//     posicion = i;
// }