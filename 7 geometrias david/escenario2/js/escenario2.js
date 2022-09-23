//escenarios

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x3CF9F0);
scene.fog = new THREE.Fog(0x00000, 0.1, 8);

var loader = new THREE.TextureLoader();
loader.load(
  '../texturas/flores.jpeg', function(texture){
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
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../texturas/textura2.jpg')
const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading = true;
material.wireframe = false;
material.transparent = true;
material.opacity = 0.8;
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 5;

//Line

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x501D1D } ) );
scene.add( line );

//animación
function animate() {
	requestAnimationFrame( animate );
  capsule.rotation.x += 0.05;
capsule.rotation.y += 0.01;
capsule.rotation.z += 0.06;
line.rotation.x += 0.05;
line.rotation.y += 0.01;
line.rotation.z += 0.06;
	renderer.render( scene, camera );
}
animate();