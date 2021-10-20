const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "es-AR";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const listaLetras = [
  { letra: "a", codigo: "Alpha" },
  { letra: "b", codigo: "Bravo" },
];
listaLetras.push({ letra: "c", codigo: "Charlie" });
listaLetras.push({ letra: "d", codigo: "Delta" });
listaLetras.push({ letra: "e", codigo: "Echo" });
listaLetras.push({ letra: "f", codigo: "Foxtrot" });
listaLetras.push({ letra: "g", codigo: "Golf" });
listaLetras.push({ letra: "h", codigo: "Hotel" });
listaLetras.push({ letra: "i", codigo: "India" });
listaLetras.push({ letra: "j", codigo: "Juliet" });
listaLetras.push({ letra: "k", codigo: "Kilo" });
listaLetras.push({ letra: "l", codigo: "Lima" });
listaLetras.push({ letra: "m", codigo: "Mike" });
listaLetras.push({ letra: "n", codigo: "November" });
listaLetras.push({ letra: "o", codigo: "Oscar" });
listaLetras.push({ letra: "p", codigo: "Pappa" });
listaLetras.push({ letra: "q", codigo: "Quebec" });
listaLetras.push({ letra: "r", codigo: "Romeo" });
listaLetras.push({ letra: "s", codigo: "Sierra" });
listaLetras.push({ letra: "t", codigo: "Tango" });
listaLetras.push({ letra: "u", codigo: "Uniform" });
listaLetras.push({ letra: "v", codigo: "Victor" });
listaLetras.push({ letra: "w", codigo: "Whiskey" });
listaLetras.push({ letra: "x", codigo: "X-ray" });
listaLetras.push({ letra: "y", codigo: "Yankee" });
listaLetras.push({ letra: "z", codigo: "Zulu" });
listaLetras.push({ letra: "1", codigo: "Uno" });
listaLetras.push({ letra: "2", codigo: "Dos" });
listaLetras.push({ letra: "3", codigo: "Tres" });
listaLetras.push({ letra: "4", codigo: "Cuatro" });
listaLetras.push({ letra: "5", codigo: "Cinco" });
listaLetras.push({ letra: "6", codigo: "Seis" });
listaLetras.push({ letra: "7", codigo: "Siete" });
listaLetras.push({ letra: "8", codigo: "Ocho" });
listaLetras.push({ letra: "9", codigo: "Nueve" });
listaLetras.push({ letra: "0", codigo: "Cero" });
listaLetras.push({ letra: "-", codigo: "-" });
listaLetras.push({ letra: " ", codigo: "" });

// Get the input field
var input = $('abcresult');

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myButton").click();
  }
});

function handleCodificar() {
  const userText = document.getElementById("abcresult").value;
  document.getElementById("resultado").innerHTML = codificarTexto(userText);
}

function codificarTexto(texto) {
  let response = "";
  for (let index = 0; index < texto.length; index++) {
    response = response + " " + convertirLetra(texto[index]);
  }
  return response;
}

function convertirLetra(letra) {
  for (let index = 0; index < listaLetras.length; index++) {
    if (listaLetras[index].letra === letra) {
      return listaLetras[index].codigo;
    }
  }
  return "*";
}
function escuchar() {
    document.getElementById("btnEscuchar").innerHTML = "Escuchando...";
  recognition.start();
  console.log("Listo para recibir comandos de voz.");
}

recognition.onresult = function (event) {
    document.getElementById("btnEscuchar").innerHTML = "Escuchar";
  var voz = event.results[0][0].transcript;
  voz = voz.toLowerCase();
  console.log(voz);
  voz = voz.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  console.log(voz);
  document.getElementById("resultado").innerHTML = codificarTexto(voz);
  console.log("Confidence: " + event.results[0][0].confidence);
};

recognition.onspeechend = function () {
  recognition.stop();
};

recognition.onnomatch = function (event) {
  diagnostic.textContent = "No te entendi, habla bien carajo!!!!.";
};
