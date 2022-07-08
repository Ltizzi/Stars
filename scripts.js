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

colores2 = [
  "#ffd27d",
  "#ffa371",
  "#a6a8ff",
  "#fffa86",
  "#a87bff",
  "#c7d8ff",
  "#fff4f3",
  "#afc9ff",
];

function genNumber() {
  return Math.floor(Math.random() * 1920);
}

function randomIndex(paleta) {
  return Math.floor(Math.random() * paleta.length);
}

function generarEstrellas(cantidad, paleta) {
  var resultado = [];
  var contador = 0;
  while (contador < cantidad) {
    resultado.push(
      genNumber() + "px " + genNumber() + "px " + paleta[randomIndex(paleta)]
    );
    contador++;
  }
  return resultado;
}

let stars =
  ":root { --stars1: " +
  String(generarEstrellas(10900, colores2)) +
  "; --stars2: " +
  String(generarEstrellas(10000, colores2)) +
  "; --stars3: " +
  String(generarEstrellas(2500, colores2)) +
  " ;--stars4: " +
  String(generarEstrellas(10900, colores2)) +
  "; --stars5: " +
  String(generarEstrellas(500, colores2)) +
  ";}";

const sheet = new CSSStyleSheet();
sheet.insertRule(stars);

document.adoptedStyleSheets = [sheet];
