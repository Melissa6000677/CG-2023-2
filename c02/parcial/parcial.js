// Configuracion escena
const scene = new THREE.Scene();

// Configuracion camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Configuracion renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function cubo(x, y, z, escala, textureUrl) {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textureUrl);

  // Crear geometria
  const geometry = new THREE.Geometry();

  // Definir los vértices del cubo
  geometry.vertices.push(
    new THREE.Vector3(-0.5, -0.5, -0.5),
    new THREE.Vector3(0.5, -0.5, -0.5),
    new THREE.Vector3(0.5, -0.5, 0.5),
    new THREE.Vector3(-0.5, -0.5, 0.5),
    new THREE.Vector3(-0.5, 0.5, -0.5),
    new THREE.Vector3(0.5, 0.5, -0.5),
    new THREE.Vector3(0.5, 0.5, 0.5),
    new THREE.Vector3(-0.5, 0.5, 0.5)
  );
  // Definir las caras del cubo
  geometry.faces.push(
    new THREE.Face3(0, 1, 5),
    new THREE.Face3(0, 5, 4),
    new THREE.Face3(1, 2, 6),
    new THREE.Face3(1, 6, 5),
    new THREE.Face3(2, 3, 7),
    new THREE.Face3(2, 7, 6),
    new THREE.Face3(3, 0, 4),
    new THREE.Face3(3, 4, 7),
    new THREE.Face3(4, 5, 6),
    new THREE.Face3(4, 6, 7),
    new THREE.Face3(0, 3, 2),
    new THREE.Face3(0, 2, 1)
  );
  // Calcular normales para las caras
  geometry.computeFaceNormals();

// Funcion animar
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();