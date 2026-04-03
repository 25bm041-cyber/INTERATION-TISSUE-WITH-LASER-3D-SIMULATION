let scene, camera, renderer, laser;

function init3D() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 500);

    document.getElementById("sceneContainer").appendChild(renderer.domElement);

    // 🧱 Tissue layers
    createLayer(0, 0xff9999); // Skin
    createLayer(-1, 0xffff99); // Fat
    createLayer(-2, 0xff6666); // Muscle

    // 🔴 Laser beam
    let geometry = new THREE.CylinderGeometry(0.1, 0.1, 5);
    let material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    laser = new THREE.Mesh(geometry, material);

    laser.rotation.z = Math.PI / 2;
    laser.position.x = -5;

    scene.add(laser);

    animate();
}

function createLayer(y, color) {
    let geometry = new THREE.BoxGeometry(8, 1, 3);
    let material = new THREE.MeshBasicMaterial({ color: color });
    let layer = new THREE.Mesh(geometry, material);
    layer.position.y = y;
    scene.add(layer);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}