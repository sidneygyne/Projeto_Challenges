var textoImput = document.querySelector("#input-texto");
var outImput = document.querySelector("#output");


function criptografar(){
    var texto = textoImput.value;
    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufa");
    outImput.innerHTML = '<textarea readonly id="input-texto" class="output-texto">' + resultadoCripto + '</textarea>' + '<button onclick="copiar()" class="botao_ação">Copiar</button>';
    var x = '<textarea readonly id="saida" class="output-texto">' + resultadoCripto;

    saidaTexto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufa");
    botaoCopiarTexto = saidaTexto;
    resultadoCripto.innerHTML = saidaTexto;
}


function descriptografar(){
    var texto = textoImput.value;
    var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufa/g, "u");
    outImput.innerHTML = '<textarea readonly id="input-texto" class="output-texto">' + resultadoDescripto + '</textarea>' + '<button onclick="copiar()" class="botao_ação">Copiar</button>';
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