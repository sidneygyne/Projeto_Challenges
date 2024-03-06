var textoImput = document.querySelector("#imput-texto");
var outImput = document.querySelector("#output");

function criptografar0(){
    var texto = textoImput.value;

    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufa");
   
    document.getElementById("output").innerHTML = '<textarea readonly id="output-texto">' + resultadoCripto
    '</textarea>'
}                                                   

function criptografar(){
    var texto = textoImput.value;

    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufa");
   
    document.getElementById("output").innerHTML = '<button onclick="copiar()" class="botao_ação" id="copiar">Copiar</button>'
    + '<textarea readonly id="output-texto">' + resultadoCripto
    '</textarea>'
}




function descriptografar(){
    var texto = textoImput.value;
   
    var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufa/g, "u");
   
    document.getElementById("output").innerHTML = '<button onclick="copiar()" class="botao_ação" id="copiar">Copiar</button>'
    + '<textarea readonly id="output-texto">' + resultadoDescripto 
    '</textarea>' 
}



function copiar() {
    var textoCop = document.getElementById("imput-texto");
    textoCop.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand('copy');
    alert("Texto Copiado");

}


//function criptografar() {
//    document.getElementById("p2").innerHTML = resultadoCripto;
//}