//escenarios

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF89BF9);
scene.fog = new THREE.Fog(0x00000, 10, 30);

var loader = new THREE.TextureLoader();
loader.load(
  '../texturas/arboles.jpeg', function(texture){
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
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../texturas/textura1.jpg')
const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading = true;
material.wireframe = false;
material.transparent = true;
material.opacity = 0.6;
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );


camera.position.z = 5;

//animación
function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x += 0.05;
cube.rotation.y += 0.01;
cube.rotation.z += 0.06;
line.rotation.x += 0.05;
line.rotation.y += 0.01;
line.rotation.z += 0.06;
	renderer.render( scene, camera );
}
animate();