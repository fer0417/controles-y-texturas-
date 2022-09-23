//escenarios

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x3CF9F0);
scene.fog = new THREE.Fog(0x00000, 0.1, 8);

var loader = new THREE.TextureLoader();
loader.load(
  '../texturas/computador.jpeg', function(texture){
    scene.background = texture;
  }
);
//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria 
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material = new THREE.MeshNormalMaterial( {color: 0x0C45D6} );
const cylinder = new THREE.Mesh( geometry, material );
material.wireframe = false;
material.transparent = true;
material.opacity = 0.8;
scene.add( cylinder );

camera.position.z = 30;

//Line

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xFF71F0 } ) );
scene.add( line );

//ORBIT CONTROLS

/*var control = new THREE.OrbitControls( camera, renderer.domElement );
control.minDistance = 3;
control.maxDistance = 6;*/

//pointerLockControls
/*const control = new THREE.PointerLockControls( camera,  renderer.domElement );
document.getElementById('btnplay').onclick = () => { 
  control.lock();
};*/

//Dragcontrols
const controls = new THREE.DragControls([cylinder], camera, renderer.
  domElement )


//animación
function animate() {
	requestAnimationFrame( animate );
  cylinder.rotation.x += 0.05;
cylinder.rotation.y += 0.01;
cylinder.rotation.z += 0.06;
line.rotation.x += 0.05;
line.rotation.y += 0.01;
line.rotation.z += 0.06;
	renderer.render( scene, camera );
}
animate();