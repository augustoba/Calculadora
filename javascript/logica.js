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
  if (numero1 < 8){
    numero1 = resultado.textContent;
    operacion = "+";
    limpiar();
  }
  else{
    resultado.textContent="error debe ingresar menos de 8 digitos";
  }
}

menos.onclick = function (aux) {
  if (numero1 < 8){
    numero1 = resultado.textContent;
    operacion = "-";
    limpiar();
  }
  else{
    resultado.textContent="error debe ingresar menos de 8 digitos";
    }
}

por.onclick = function (aux) {
  if (numero1 < 8){
    numero1 = resultado.textContent;
    operacion = "*";
    limpiar();
  }
  else{
    resultado.textContent="error debe ingresar menos de 8 digitos";
  }
}

dividido.onclick = function (aux) {
  if (numero1 < 8){
    numero1 = resultado.textContent;
    operacion = "/";
    limpiar();
  }
  else{
    resultado.textContent="error debe ingresar menos de 8 digitos";
  }
}

igual.onclick = function (aux) {
  if (numero1 < 8){
    numero2 = resultado.textContent;
    
    resolver();
  }
  else{
    resultado.textContent="error debe ingresar menos de 8 digitos";
  }
    
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
