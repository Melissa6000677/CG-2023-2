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

  // Calcular coordenadas UV manualmente
  geometry.faceVertexUvs[0] = [];
  for (let i = 0; i < geometry.faces.length; i++) {
    const face = geometry.faces[i];
    const uvs = [];
    for (let j = 0; j < 3; j++) {
      const vertexIndex = face.a + (j % 3);
      const vertex = geometry.vertices[vertexIndex];
      uvs.push(new THREE.Vector2((vertex.x + 0.5), (vertex.y + 0.5)));
    }
    geometry.faceVertexUvs[0].push(uvs);
  }

  const material = new THREE.MeshBasicMaterial({ wireframe: false, side: THREE.DoubleSide, map: texture });
  const customMesh = new THREE.Mesh(geometry, material);
  customMesh.position.set(x, y, z); // Posición del cubo
  customMesh.scale.set(escala, escala, escala); // Transformacion de escala
  scene.add(customMesh); // Agregar el cubo a la escena
}

// Función para trazar ejes
function trazarEjes() {
  const axesHelper = new THREE.AxesHelper(5); // Longitud de los ejes
  scene.add(axesHelper);
}

// Posición de la cámara
camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 2;

// Crea tres cubos 
cubo(0, 0, 0, 1, 'https://static.vecteezy.com/system/resources/thumbnails/002/697/104/original/animated-green-pixel-grass-background-the-concept-of-games-background-squares-pattern-background-minecraft-concept-illustration-light-green-abstract-textured-polygonal-background-video.jpg');
cubo(0, 0.75, 0, 0.5, 'https://static.vecteezy.com/system/resources/thumbnails/002/697/104/original/animated-green-pixel-grass-background-the-concept-of-games-background-squares-pattern-background-minecraft-concept-illustration-light-green-abstract-textured-polygonal-background-video.jpg');
cubo(0, 1.125, 0, 0.25, 'https://static.vecteezy.com/system/resources/thumbnails/002/697/104/original/animated-green-pixel-grass-background-the-concept-of-games-background-squares-pattern-background-minecraft-concept-illustration-light-green-abstract-textured-polygonal-background-video.jpg');

// Llama a la función para trazar ejes
trazarEjes();

// Funcion animar
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();