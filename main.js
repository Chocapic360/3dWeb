import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// const gridHelper = new THREE.gridHelper(200,50);
// scene.add(gridHelper);

const geometry = new THREE.IcosahedronGeometry(10, 3)
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
const d20 = new THREE.Mesh( geometry, material );

const torgeometry = new THREE.TorusGeometry(15, 2, 32, 100);
const tormaterial = new THREE.MeshBasicMaterial({color: 0x00FFE3, wireframe:true});
const torus = new THREE.Mesh(torgeometry, tormaterial);
torus.rotateX(90);

scene.add(d20);
scene.add(torus);

function movecamera(){
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.z = t * -.0002;
  //camera.rotation.y = t * -0.0002;
}
document.body.onscroll = movecamera

// function addStar() {
//   const geometry = new THREE.TorusKnotGeometry();
//   const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
//   const star = new THREE.Mesh(geometry, material);

//   const[x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
//   star.position.set(x,y,z);
//   scene.add(star);
// }

// Array(15).fill().forEach(addStar);

//const controls = new OrbitControls(camera,renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  d20.rotation.x += 0.005;
  d20.rotation.y += 0.0025;
  d20.rotation.z += 0.005;

  torus.rotation.x += 0.005;
  torus.rotation.y += 0.0025;
  torus.rotateZ += 0.005;

  renderer.render (scene, camera);
}

animate()