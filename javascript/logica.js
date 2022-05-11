var resultado = document.getElementById("resultado");
var reset = document.getElementById("reset");
var mas = document.getElementById("mas");
var menos = document.getElementById("menos");
var por = document.getElementById("por");
var dividido = document.getElementById("dividido");
var igual = document.getElementById("igual");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var cero = document.getElementById("cero");
var numero1;
var numero2;
var operacion;


uno.onclick = function (aux) {
  resultado.textContent = resultado.textContent + "1";
}

dos.onclick = function (aux) {
  resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (aux) {
  resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (aux) {
  resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (aux) {
  resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (aux) {
  resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (aux) {
  resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (aux) {
  resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (aux) {
  resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (aux) {
  resultado.textContent = resultado.textContent + "0";
}

reset.onclick = function (aux) {
  resetear();
}

mas.onclick = function (aux) {
  numero1 = resultado.textContent;
  operacion = "+";
  limpiar();
}

menos.onclick = function (aux) {
  numero1 = resultado.textContent;
  operacion = "-";
  limpiar();
}

por.onclick = function (aux) {
  numero1 = resultado.textContent;
  operacion = "*";
  limpiar();
}

dividido.onclick = function (aux) {
  numero1 = resultado.textContent;
  operacion = "/";
  limpiar();
}

igual.onclick = function (aux) {
  numero2 = resultado.textContent;
  resolver();
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
  resultado.textContent = "";
  numero1 = 0;
  numero2 = 0;
  operacion = "";
}

function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(numero1) + parseFloat(numero2);
      break;
    case "-":
      res = parseFloat(numero1) - parseFloat(numero2);
      break;

    case "/":
      res = parseFloat(numero1) / parseFloat(numero2);
      break;

    case "*":
      res = parseFloat(numero1) * parseFloat(numero2);
      break;
  }
  resetear();
  resultado.textContent = res;
}
