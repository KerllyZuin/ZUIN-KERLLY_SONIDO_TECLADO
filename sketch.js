// Almacena sonidos
let sonidos = [];

// Precarga los sonidos
function preload() {
  for (let i = 0; i < 7; i++) {
    sonidos[i] = loadSound("sonidos/" + i + ".wav");
  }
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight); // Asigna la función presionado() al evento mouseClicked del lienzo
  cnv.mouseClicked(presionado);
}

// Se ejecuta cuando se hace clic en el lienzo
function presionado() {
  // Reproduce un sonido aleatorio y dibuja una mancha irregular
  reproducirSonido();
  dibujarManchaIrregular();
}

function draw() {}

function mouseDragged() {
  // Reproduce un sonido aleatorio y dibuja una mancha irregular
  reproducirSonido();
  dibujarManchaIrregular();
}

// Función que se ejecuta cuando se presiona una tecla
function keyPressed() {
  // Reproduce un sonido aleatorio y dibuja una mancha irregular según la tecla presionada
  switch (key) {
    case "a":
    case "s":
    case "d":
    case "f":
    case "g":
    case "h":
    case "j":
      reproducirSonido();
      dibujarManchaIrregular();
      break;
  }
}

// Reproduce un sonido aleatorio
function reproducirSonido() {
  // Genera un índice aleatorio para seleccionar un sonido del arreglo
  let r = floor(random(7)); // Reproduce el sonido correspondiente al índice aleatorio
  sonidos[r].play();
}

// Dibuja una mancha irregular
function dibujarManchaIrregular() {
  // Colores aleatorios en una gama entre amarillo y violeta
  let col = lerpColor(color(255, 255, 0), color(138, 43, 226), random());
  fill(col); // Sin líneas de contorno

  noStroke(); // Tamaño aleatorio

  let tam = random(20, 100); // Crea una mancha irregular

  beginShape();
  for (let i = 0; i < 10; i++) {
    let x = mouseX + cos(random(TWO_PI)) * tam * random(0.5, 1.5);
    let y = mouseY + sin(random(TWO_PI)) * tam * random(0.5, 1.5);
    vertex(x, y);
  }
  endShape(CLOSE);
}
