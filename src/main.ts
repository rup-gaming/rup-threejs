import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(
    85,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Create Renderer
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create Cube
const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({ color: "orange" });
const cube = new Mesh(geometry, material);
scene.add(cube);

// Adjust Camera Position
camera.position.z = 5;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
