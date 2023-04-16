import { useEffect } from 'react'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

export function useThreeRender<T extends string | string[]>(materials: T) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 0.1;
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controls = new OrbitControls(camera,  renderer.domElement);
    controls.enableDamping = true;
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
    }
    //materials为数组 BoxGeometry + TextureLoader
    if(Array.isArray(materials)) {
        const geometry = new THREE.BoxGeometry(10, 10, 10);
        const boxMaterials: THREE.MeshBasicMaterial[] = [];
        materials.forEach((item) => {
          let texture = new THREE.TextureLoader().load(item);
          if (item.includes("/u") || item.includes("/d")) {
            texture.rotation = Math.PI;
            texture.center = new THREE.Vector2(0.5, 0.5);
            boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
          } else {
            boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
          }
        });
        const cube = new THREE.Mesh(geometry, boxMaterials);
        cube.geometry.scale(1, 1, -1);
        scene.add(cube);
    // materials为HDR SphereGeometry + RGBELoader
    } else {
        const loader = new RGBELoader();
        loader.load(materials, (texture) => {
            const geometry = new THREE.SphereGeometry(5, 32, 32);     
            const material = new THREE.MeshBasicMaterial({ map: texture });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.geometry.scale(1, 1, -1);
            scene.add(sphere);
        });  
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return {
        camera,
        scene,
        renderer
    }
}
