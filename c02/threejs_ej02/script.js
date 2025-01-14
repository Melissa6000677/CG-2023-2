<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Proyecciones en Three.js</title>
    <style>
        body {
            margin: 0;
        }
    </style>
</head>

<body>

    <!-- Librería Three.js -->
    <script src="three.min.js"></script>

    <!-- Material para ver los objetos -->
    <script src="MeshNormalMaterial.js"></script>

    <script>

        // Variables para la escena, las camaras y el renderizador
        var escena, camara, renderizador;
        var cubo, esfera;
        var camara_ortografica, camara_perspectiva;
        var ortografico = false;

        crear(); 
        animate();

        function crear() {

            // Configurar escena
            escena = new THREE.Scene();

            // Crear camara ortografica
            const aspect = window.innerWidth / window.innerHeight;
            camara_ortografica = new THREE.OrthographicCamera(-2 * aspect, 2 * aspect, 2, -2, 1, 10);
            camara_ortografica.position.set(2, 2, 4);
            camara_ortografica.lookAt(0, 0, 0);

            camara_perspectiva = new THREE.PerspectiveCamera(75, aspect, 0.1, 10);
            camara_perspectiva.position.set(2, 2, 4);
            camara_perspectiva.lookAt(0, 0, 0);

            // Crear renderizador
            renderizador = new THREE.WebGLRenderer();
            renderizador.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderizador.domElement);

            // Crear cubo
            const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); // Ancho, alto y profundo
            const cubeMaterial = new THREE.MeshNormalMaterial(); // Material
            cubo = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cubo.position.set(-1, 0, 0); // Posicion
            escena.add(cubo);

            // Crear esfera
            const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32); // Radio, ancho y alto
            const sphereMaterial = new THREE.MeshNormalMaterial(); // Material
            esfera = new THREE.Mesh(sphereGeometry, sphereMaterial);
            esfera.position.set(1, 0, 0); // Posicion
            escena.add(esfera);

            // Configuracion de teclas
            window.addEventListener('keydown', (event) => {
                if (event.key === 'o' || event.key === 'O') {
                    ortografico = true;
                } else if (event.key === 'p' || event.key === 'P') {
                    ortografico = false;
                }
            });
        }

        // Funcion animacion
        function animate() {
            requestAnimationFrame(animate);

            // Alternar entre cámaras
            if (ortografico) {
                renderizador.render(escena, camara_ortografica);
            } else {
                renderizador.render(escena, camara_perspectiva);
            }
        }

        // Redimensionar la ventana
        window.addEventListener('resize', () => {
            const aspect = window.innerWidth / window.innerHeight;

            camara_ortografica.left = -2 * aspect;
            camara_ortografica.right = 2 * aspect;
            camara_ortografica.top = 2;
            camara_ortografica.bottom = -2;
            camara_ortografica.updateProjectionMatrix();

            camara_perspectiva.aspect = aspect;
            camara_perspectiva.updateProjectionMatrix();

            renderizador.setSize(window.innerWidth, window.innerHeight);
        });

    </script>
</body>

</html>