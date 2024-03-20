const campo_texto = document.querySelector("#ingresaTexto");
const campo_mensaje = document.querySelector("#contenedorRespuesta");

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],

];

function btnEncriptar(){
    const texto = campo_texto.ariaValueMax;
    console.log(texto);
}

function encriptar(FraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(FraseEncriptada.includes(matriz_code[i][0])){
            FraseEncriptada = FraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return FraseEncriptada;

}

