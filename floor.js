import * as THREE from "three";

export const setupFloor = (scene) => {
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF, // White color
    side: THREE.DoubleSide,
  });

  const planeGeometry = new THREE.PlaneGeometry(45, 45);
  const floorPlane = new THREE.Mesh(planeGeometry, floorMaterial);

  floorPlane.rotation.x = Math.PI / 2;
  floorPlane.position.y = -Math.PI;

  scene.add(floorPlane);
};
