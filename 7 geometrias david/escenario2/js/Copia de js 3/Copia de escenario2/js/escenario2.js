//escenarios

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x3CF9F0);
scene.fog = new THREE.Fog(0x00000, 0.1, 8);

var loader = new THREE.TextureLoader();
loader.load(
  './imagenes2/35286.jpeg', function(texture){
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
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 5;

//animación
function animate() {
	requestAnimationFrame( animate );
  capsule.rotation.x += 0.05;
capsule.rotation.y += 0.01;
capsule.rotation.z += 0.06;
	renderer.render( scene, camera );
}
animate();