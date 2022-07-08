colores = [
  "#6272a4",
  "#f8f8f2",
  "#8be9fd",
  "#50fa7b",
  "#ffb86c",
  "#ff79c6",
  "#bd93f9",
  "#ff5555",
  "#f1fa8c",
];

function genNumber() {
  return Math.floor(Math.random() * 1920);
}

function randomIndex() {
  return Math.floor(Math.random() * 8);
}

function generarEstrellas(cantidad) {
  var resultado = [];
  var contador = 0;
  while (contador < cantidad) {
    resultado.push(
      genNumber() + "px " + genNumber() + "px " + colores[randomIndex()]
    );
    contador++;
  }
  return resultado;
}

let stars =
  ":root { --stars1: " +
  String(generarEstrellas(10900)) +
  "; --stars2: " +
  String(generarEstrellas(10000)) +
  "; --stars3: " +
  String(generarEstrellas(2500)) +
  " ;--stars4: " +
  String(generarEstrellas(10900)) +
  "; --stars5: " +
  String(generarEstrellas(500)) +
  ";}";

const sheet = new CSSStyleSheet();
sheet.insertRule(stars);

document.adoptedStyleSheets = [sheet];
