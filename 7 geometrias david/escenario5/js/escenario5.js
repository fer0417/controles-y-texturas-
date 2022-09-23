//escenarios

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xB79BF9);

var loader = new THREE.TextureLoader();
loader.load(
  '../texturas/ola.jpeg', function(texture){
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
const geometry = new THREE.CircleGeometry( 5, 32 );
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../texturas/textura5.jpg')
const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading = true;
material.wireframe = false;
material.transparent = true;
material.opacity = 0.8;
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );

camera.position.z = 20;

//Line

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x670F68 } ) );
scene.add( line );

//animación
function animate() {
	requestAnimationFrame( animate );
    circle.rotation.x += 0.05;
    circle.rotation.y += 0.01;
    circle.rotation.z += 0.06;
    line.rotation.x += 0.05;
    line.rotation.y += 0.01;
    line.rotation.z += 0.06;
	renderer.render( scene, camera );
}
animate();