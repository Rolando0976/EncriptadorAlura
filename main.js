// textarea
var textoIngresado = document.getElementById("IngresarTexto");
var textoPorEncriptar = textoIngresado.value;
var input = document.getElementById("Imprimir")

function ajustarAltura(textoIngresado) {
    textoIngresado.style.height = "auto";

    var lineas = textoIngresado.value.split("\n").length;

    textoIngresado.style.height = (lineas * parseFloat(getComputedStyle(textoIngresado).lineHeight)) + "1px";


}

function ajustarAltura(input) {
    input.style.height = "auto";

    var lineas = input.value.split("\n").length;

    input.style.height = (lineas * parseFloat(getComputedStyle(input).lineHeight)) + "1px";


}

function seleccionarTexto() {
    textoIngresado.select();
}

document.addEventListener("click", function () {
    if (EventTarget !== textoIngresado) {
        textoIngresado.value = "Ingrese el texto aquí";

    }
});

function Encriptar(texto) {
    var imprimir = document.getElementById("Imprimir");


    texto = textoIngresado.value;
    var textoEncriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        // opacidad de los botones
    Cambiarpacity("munheco", 0);
    Cambiarpacity("warning2", 0);
    Cambiarpacity("copiar", 1);

    return imprimir.value = textoEncriptado;


}
function DesEncriptar(texto) {
    var imprimir = document.getElementById("Imprimir");
    texto = textoIngresado.value;
    var textoDesencriptado = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        // opacidad de los botones
    Cambiarpacity("munheco", 0);
    Cambiarpacity("warning2", 0);
    Cambiarpacity("copiar", 1);
    return imprimir.value = textoDesencriptado;

}
function copiar() {
    var InputElemet = document.getElementById("Imprimir");
    InputElemet.select();
    navigator.clipboard.writeText(InputElemet.value);

}

function Cambiarpacity(id, opacity) {
    document.getElementById(id).style.opacity = opacity;

}