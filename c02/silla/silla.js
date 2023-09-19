// Constantes de medidas
const anchoCuboBase = 2;
const altoCuboBase = 2;
const profundidadCuboBase = 2;
const altoPatas = 1.0;   // Altura de las patas
const anchoPatas = 0.1;  // Ancho de las patas
const anchoSilla = 0.8;  // Ancho del asiento cuadrado
const altoSilla = 0.2;   // Espesor del asiento y del respaldo

// Configuración de la escena
const scene = new THREE.Scene();

// Configuración de la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10);
camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 1;

// Configuración del renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Función para crear un cubo con dimensiones personalizadas y material normal
function crearCubo(ancho, alto, profundidad) {
    const geometry = new THREE.BoxGeometry(ancho, alto, profundidad);
    const material = new THREE.MeshNormalMaterial();
    return new THREE.Mesh(geometry, material);
}

// Crea el cubo base centrado alrededor del origen
const cuboBase = crearCubo(anchoCuboBase, altoCuboBase, profundidadCuboBase);
// Mueve el asiento encima de las patas
cuboBase.position.y = (0.5);

// Escala el cubo base para formar el asiento cuadrado
cuboBase.scale.set(anchoSilla / anchoCuboBase, altoSilla / altoCuboBase, anchoSilla / profundidadCuboBase);

// Crea las patas escalando el cubo base
const pata1 = cuboBase.clone();
pata1.scale.set(anchoPatas, altoPatas, anchoPatas);
pata1.position.set(-anchoSilla / 2, -altoPatas / 2, -anchoSilla / 2);

const pata2 = cuboBase.clone();
pata2.scale.set(anchoPatas, altoPatas, anchoPatas);
pata2.position.set(anchoSilla / 2, -altoPatas / 2, -anchoSilla / 2);

const pata3 = cuboBase.clone();
pata3.scale.set(anchoPatas, altoPatas, anchoPatas);
pata3.position.set(-anchoSilla / 2, -altoPatas / 2, anchoSilla / 2);

const pata4 = cuboBase.clone();
pata4.scale.set(anchoPatas, altoPatas, anchoPatas);
pata4.position.set(anchoSilla / 2, -altoPatas / 2, anchoSilla / 2);

// Agrega todos los elementos a la escena
scene.add(cuboBase);
scene.add(pata1);
scene.add(pata2);
scene.add(pata3);
scene.add(pata4);

// Función para animar la escena
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

// Inicia la animación
animate();

