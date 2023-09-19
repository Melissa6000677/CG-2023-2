// Constantes de medidas
const altoPatas = 1.0;   // Altura de las patas
const anchoPatas = 0.1;  // Ancho de las patas
let anchoSilla = 1;      // Ancho del asiento cuadrado
const altoSilla = 0.2;   // Espesor del asiento y del respaldo
const radioRespaldo = 0.4; // Radio del respaldo cilíndrico
const espesorRespaldo = 0.2; // Espesor del respaldo cilíndrico

// Otras constantes de medidas
const radioCilindro = 0.4;
const espesorCilindro = 0.2;

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

// Función para crear un cilindro con radio y altura personalizados
function crearCilindro(radio, altura) {
    const geometry = new THREE.CylinderGeometry(radio, radio, altura, 32);
    const material = new THREE.MeshNormalMaterial();
    return new THREE.Mesh(geometry, material);
}

// Crea el cubo base centrado alrededor del origen
const cuboBase = crearCubo(anchoSilla, altoSilla, anchoSilla);
// Mueve el asiento encima de las patas
cuboBase.position.y = (0.6);

// Crea las patas como en el código original
const pata1 = crearCubo(anchoPatas, altoPatas, anchoPatas);
pata1.position.set(-0.4, 0, -0.4);

const pata2 = crearCubo(anchoPatas, altoPatas, anchoPatas);
pata2.position.set(0.4, 0, -0.4);

const pata3 = crearCubo(anchoPatas, altoPatas, anchoPatas);
pata3.position.set(-0.4, 0, 0.4);

const pata4 = crearCubo(anchoPatas, altoPatas, anchoPatas);
pata4.position.set(0.4, 0, 0.4);

// Crea el cilindro encima del asiento y rota 90 grados en el eje Y
const cilindroRespaldo = crearCilindro(radioRespaldo, espesorRespaldo);
cilindroRespaldo.rotation.x = Math.PI / 2; // Rotación de 90 grados en Y
cilindroRespaldo.position.set(0, 1.1, 0.4);

// Agrega todos los elementos a la escena
scene.add(cuboBase);
scene.add(pata1);
scene.add(pata2);
scene.add(pata3);
scene.add(pata4);
scene.add(cilindroRespaldo);

// Crea un grupo para la silla y agrega todos los elementos
const grupoSilla = new THREE.Group();
grupoSilla.add(cuboBase);
grupoSilla.add(pata1);
grupoSilla.add(pata2);
grupoSilla.add(pata3);
grupoSilla.add(pata4);
grupoSilla.add(cilindroRespaldo);

// Agrega el grupo a la escena
scene.add(grupoSilla);

// Función para animar la escena y rotar la silla
const animate = () => {
    requestAnimationFrame(animate);

    // Rotación de la silla
    grupoSilla.rotation.y += 0.005; // Puedes ajustar la velocidad de rotación aquí

    renderer.render(scene, camera);
};

// Inicia la animación
animate();





