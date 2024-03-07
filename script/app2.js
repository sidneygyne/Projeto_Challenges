const textArea = document.querySelector(".insercao_texto");
const mensagem = document.querySelectorAll(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

/*
function exibirTexto(){
    exibirTextoNaTela('h1', 'Jogodo número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
}

exibirTexto();

*/

function criptografar() {
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
} 


function criptografar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function descriptografar() {
    const textoDesencriptado = descriptografar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function descriptografar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiar() {
    navigator.clipboard.writeText(botaoCopiarTexto);
}


function copiar() {
    var textoCop = document.getElementById('#input-texto');
    textoCop.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Texto Copiado");

}