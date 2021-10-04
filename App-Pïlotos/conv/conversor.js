const kiloConst = 1.60934;
const mileConst = 0.621371

function getKilometers(miles) {
  let resultado = parseInt(miles) * kiloConst;
  let resultadoredondo = Math.round(resultado * 100) / 100;
  return resultadoredondo;
}
function getMillas(kilometers) {
  let resultado = parseInt(kilometers) * mileConst;
  let resultadoredondo = Math.round(resultado * 100) / 100;
  return resultadoredondo;
}
function convertir(numero, unidad){
  if(unidad ==="km"){
    return getKilometers(numero)+" Kilometros";
  }
  if(unidad ==="mi"){
    return getMillas(numero)+" Millas";
  }
}
function handleConvertir(){
  var numero = document.getElementById("txtNumber").value; 
  var unidad = document.getElementById("cmbUnidades").value;  
    document.getElementById('lblResultado').innerHTML = convertir(numero, unidad);
}