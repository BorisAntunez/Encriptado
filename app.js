const textArea = document.querySelector("#ingresaCodigo");
const mensaje = document.querySelector("#resultasdoCodigo");

function btnEncriptar(){
    const textoEncriptado = encrinptar(textArea.value)
    mensaje.value = textoEncriptado
}

function encrinptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o" ,"ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada;

}

function copiarTexto() {
    // Seleccionar el elemento del área de texto
    const textArea = document.querySelector("#ingresaCodigo");

    // Seleccionar el texto dentro del área de texto
    textArea.select();

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Deseleccionar el texto después de copiar
    window.getSelection().removeAllRanges();

    // Alerta al usuario que el texto ha sido copiado
    alert("Texto copiado al portapapeles");
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(stringEncriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


