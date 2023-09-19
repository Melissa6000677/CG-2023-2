     // Dimensiones y medidas de la silla
     const anchoSilla = 0.8;  // Ancho del asiento cuadrado
     const altoSilla = 0.2;   // Espesor del asiento y del respaldo
     const altoPatas = 1.0;   // Altura de las patas
     const anchoPatas = 0.1;  // Ancho de las patas
     const radioRespaldo = 0.4; // Radio del respaldo cilíndrico

     // Configura la escena
     const scene = new THREE.Scene();
     
     // Configura la cámara
     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10);
     camera.position.z = 3;

     // Configura el renderizador
     const renderer = new THREE.WebGLRenderer();
     renderer.setSize(window.innerWidth, window.innerHeight);
     document.body.appendChild(renderer.domElement);

     