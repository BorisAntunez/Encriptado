const textArea = document.querySelector("#ingresaCodigo");
const mensaje = document.querySelector("#resultasdoCodigo");


textArea.addEventListener("keydown", function(event){
this.value = this.value.toLowerCase();


if (event.getModifierState("CapsLock")) {
    alert("¡Bloq Mayús está activado!");
}
});

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
    
    const textArea = document.querySelector("#resultasdoCodigo");
    textArea.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado al portapapeles");

    textArea.value ="";
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


