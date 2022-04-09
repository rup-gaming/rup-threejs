import {
    MathUtils,
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshStandardMaterial,
    MeshBasicMaterial,
    Mesh,
    PointLight,
    PlaneGeometry,
} from "three";

// Helpers
const deg = (angle: number): number => MathUtils.degToRad(angle);

// Set Up Renderer
const WIDTH = innerWidth;
const HEIGHT = innerHeight;
const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor("grey");

// Mount the Renderer
const app = document.getElementById("app")!;
app.appendChild(renderer.domElement);

// Create Camera
const camera = new PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.set(0, 5, 10);
camera.rotation.x = deg(-25);

// Create Plane
const planeGeo = new PlaneGeometry(10, 10);
const planeMat = new MeshStandardMaterial({ color: "white" });
const plane = new Mesh(planeGeo, planeMat);
plane.position.y = -1;
plane.rotation.x = deg(-90);

// Create Cube
const cubeGeo = new BoxGeometry();
const cubeMat = new MeshStandardMaterial({ color: "blue" });
const cube = new Mesh(cubeGeo, cubeMat);
cube.position.y = 0.5;
cube.rotation.set(0.2, 0.5, 0);

// Create Light
const light = new PointLight("white");
light.position.set(2, 3, 2);

// Create Scene
const scene = new Scene();
scene.add(plane);
scene.add(cube);
scene.add(light);

// Loop
function update() {
    requestAnimationFrame(update);
    cube.rotateY(0.005);
    cube.rotateZ(0.005);
    renderer.render(scene, camera);
}
update();
