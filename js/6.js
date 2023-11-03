let contador = 0;
let numerosPiramide = `1`;
do {
    
    for (let i = 0; i < contador+1; i++) {
        document.write(`${numerosPiramide}` )
    }
    document.write("<br>")
    numerosPiramide++
    contador++
} while (contador < 30);