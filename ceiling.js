import * as THREE from "three";

export const createCeiling = (scene, textureLoader) => {
  const ceilingMaterial = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF, // White color
    side: THREE.DoubleSide,
  });

  const ceilingGeometry = new THREE.PlaneGeometry(45, 40);
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

  ceilingPlane.rotation.x = Math.PI / 2;
  ceilingPlane.position.y = 10;

  scene.add(ceilingPlane);
};
