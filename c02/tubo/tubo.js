// Crear la escena
const scene = new THREE.Scene();
// Crear la camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear una curva usando CatmullRomCurve3
const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2, 0, 0),
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(2, 0, 0)
]);

// Crear la geometría del tubo alrededor de la curva
const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.2, 8, false);

// Crear un material
const material = new THREE.MeshToonMaterial({ color: 0x60DEC1 });

// Crear un objeto con la geometría y el material
const tubeMesh = new THREE.Mesh(tubeGeometry, material);

// Agregar el tubo a la escena
scene.add(tubeMesh);

// Crear luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

// Posición de la cámara
camera.position.z = 4;

// Función de animación
const animate = () => {
    requestAnimationFrame(animate);

    // Rotar el tubo
    tubeMesh.rotation.x += 0.01;
    tubeMesh.rotation.y += 0.01;

    renderer.render(scene, camera);
};

// Iniciar animación
animate();