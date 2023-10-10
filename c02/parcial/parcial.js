// Configuracion escena
const scene = new THREE.Scene();

// Configuracion camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Configuracion renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Posición de la cámara
camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 2;

animate();