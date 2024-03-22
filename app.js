const textArea = document.querySelector("#ingresaCodigo");
const mensaje = document.querySelector("#resultasdoCodigo");
 4
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat

function btnEncriptar(){
    const textoEncriptado = encrinptar(textArea.value)
    mensaje.value = textoEncriptado
}

function encrinptar(stringEncriptada){
    let matrizCodigo = [["e", "enter",]["i", "imes"],["a", "ai"], ["o" ,"ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptada.include(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada;

console.log = btnEncriptar;

}



