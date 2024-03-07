var textoImput = document.querySelector("#input-texto");
var outImput = document.querySelector("#output");


function criptografar(){
    var texto = textoImput.value;
    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufa");
    outImput.innerHTML = '<textarea readonly id="output-texto2" class="output-texto">' + resultadoCripto + '</textarea>' + '<button onclick="copiar()" class="botao_ação">Copiar</button>';
    

}


function descriptografar(){
    var texto = textoImput.value;
    var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufa/g, "u");
    outImput.innerHTML = '<textarea readonly id="output-texto2" class="output-texto">' + resultadoDescripto + '</textarea>' + '<button onclick="copiar()" class="botao_ação">Copiar</button>';
}


function copiar() {
    navigator.clipboard.writeText(botaoCopiarTexto);
}


function copiar() {
    var textoCop = document.getElementById('output-texto2');
    textoCop.select();
    textoCop.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Texto Copiado");

}