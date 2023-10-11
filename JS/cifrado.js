// Arreglo que contiene el abecedario
const abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cifrarTexto() {
    const texto = $('#input').val().toLowerCase();
    let textoCifrado = "";

    for (let i = 0; i < texto.length; i++) {
        let aux = texto[i];

        if(aux==='ñ'){
            aux = 'n';
        }
        
        // Comprobar si el caracter está en el abecedario
        let posicion = abecedario.indexOf(aux);
        if (posicion !== -1) {
            // Desplazar 6 posiciones hacia adelante en el abecedario
            let nuevaPosicion = ((posicion - 5) + abecedario.length) % abecedario.length
            aux = abecedario[nuevaPosicion];
        }
        
        textoCifrado += aux;
    }

    $('#output').val(textoCifrado);
    console.log(texto);
    console.log(textoCifrado);
}

function descifrarTexto() {
    const texto = $('#input').val().toLowerCase();
    let textoDescifrado = "";

    for (let i = 0; i < texto.length; i++) {
        let aux = texto[i];

        if(aux==='ñ'){
            aux = 'n';
        }
        
        // Comprobar si el caracter está en el abecedario
        let posicion = abecedario.indexOf(aux);
        if (posicion !== -1) {
            // Desplazar 6 posiciones hacia adelante en el abecedario
            let nuevaPosicion = ((posicion + 5) + abecedario.length) % abecedario.length
            aux = abecedario[nuevaPosicion];
        }
        
        textoDescifrado += aux;
    }

$('#output').val(textoDescifrado);
console.log(texto);
console.log(textoDescifrado);
}