var renderer, scene, camera, light;
 draw1 =function () {

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('viewport').appendChild(renderer.domElement);
  scene = new THREE.Scene();
  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(350, 100, 100).normalize();
  scene.add(light);
  light2 = new THREE.DirectionalLight(0xffffff);
  light2.position.set(-350, 100, 100).normalize();
  scene.add(light2);
  camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(20, 10, 200);
  camera.lookAt(scene.position);
  scene.add(camera);
  cameraControls = new THREE.OrbitControls(camera);
  // Example #1 - Cube (mesh) subtract Sphere (mesh)////////////////////////////////////
  (function() {
    var cube_geometry = new THREE.CubeGeometry(40, 30, 30);
    var cube_mesh = new THREE.Mesh(cube_geometry);
    cube_mesh.position.x = -0;
    var cube_bsp = new ThreeBSP(cube_mesh);
    var sphere_geometry = new THREE.SphereGeometry(20, 32, 32);
    var sphere_mesh = new THREE.Mesh(sphere_geometry);
    sphere_mesh.position.x = -0;
    var sphere_bsp = new ThreeBSP(sphere_mesh);
    //var union_bsp = sphere_bsp.union(cube_bsp);
    //var intersect_bsp = sphere_bsp_1.intersect(sphere_bsp_2);
    var subtract_bsp = cube_bsp.subtract(sphere_bsp);
    var result = subtract_bsp.toMesh(new THREE.MeshLambertMaterial({
//					shading: THREE.SmoothShading,
//					map: THREE.ImageUtils.loadTexture('wood.png')
    }));
    result.geometry.computeVertexNormals();
    scene.add(result);
  })();
  ///////////////////////////////////////////////////////////////////////////////////////
  // Example #2 - Sphere (geometry) union Cube (geometry)////////////////////////////////
  (function() {
    var sphere_geometry = new THREE.SphereGeometry(19, 16, 16);
    var sphere_bsp = new ThreeBSP(sphere_geometry);
    var cube_geometry = new THREE.CylinderGeometry(4, 16, 75,32,32);
    var cube_bsp = new ThreeBSP(cube_geometry);
    var union_bsp = sphere_bsp.union(cube_bsp);
    var result = union_bsp.toMesh(new THREE.MeshLambertMaterial({
//					shading: THREE.SmoothShading,
//					map: THREE.ImageUtils.loadTexture('texture.png')
    }));
    result.geometry.computeVertexNormals();
    scene.add(result);
  })();
  /////////////////////////////////////////////////////////////////////////////////////////
  (function render() {
    cameraControls.update();
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  })();
}
